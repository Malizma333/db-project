import base64
import hashlib
from http import server
import json
import os
import random
import sqlite3
import string
import threading
import time
import traceback

FILE_ROOT = os.path.join("..", "frontend", "dist")

EXTENSIONS = {
    "html": "text/html",
    "ico": "image/x-icon",
    "png": "image/png",
    "txt": "text/plain",
    "js": "text/javascript",
    "css": "text/css",
    "json": "application/json",
}

SERVABLE = dict()
for root, dirs, files in os.walk(FILE_ROOT):
    for f_name in files:
        full_name = os.path.join(root, f_name)
        extension = f_name.split(".")[-1]
        internal = full_name[len(FILE_ROOT):].replace("\\", "/")
        with open(full_name, "rb") as f:
            SERVABLE[internal] = (f.read(), EXTENSIONS[extension])

TOKEN_LENGTH = 30
TOKEN_CHARS = string.ascii_letters + string.digits
# time in seconds
TOKEN_LIFETIME = 30*60

db_lock = threading.Lock()


# token: (username, expiration time)
tokens = dict()


class InputError(Exception):
    def __init__(self, t, msg=None):
        self.t = t
        self.msg = msg


# TODO: every 100 requests clean old tokens?
# return username, if it fails it raises an error
def check_auth(token):
    if token in tokens:
        if time.time() < tokens[token][1]:
            return tokens[token][0]
        else:
            del tokens[token]
    raise InputError("auth_token_error")


def do_thing_safely(body):
    ret = None
    db_lock.acquire()
    try:
        conn = sqlite3.connect("recipe.db")
        # "with conn" should auto-commit (and rollback)
        with conn:
            cursor = conn.cursor()
            ret = do_thing(body, cursor)
    except:
        conn.close()
        db_lock.release()
        raise
    conn.close()
    db_lock.release()
    return ret

# This is where most db calls get handled. takes in parsed json. outputs object
# ready to be run through `dumps`
def do_thing(body, cursor):
    ret = None
    cursor.execute("PRAGMA foreign_keys = ON;")

    if body["type"] == "login":
        cursor.execute("SELECT password_hash, password_salt FROM Account WHERE username = ?",
                       (body["username"],))
        results = cursor.fetchall()
        if len(results) != 1:
            raise InputError("username_error")
        r = results[0]
        hash_bytes = base64.b64decode(r[0].encode("utf-8"))
        salt_bytes = base64.b64decode(r[1].encode("utf-8"))
        trial_hash_bytes = hashlib.pbkdf2_hmac("sha256", body["password"].encode("utf-8"), salt_bytes, 100_000)
        if hash_bytes == trial_hash_bytes:
            token = "".join(random.choices(TOKEN_CHARS, k=TOKEN_LENGTH))
            tokens[token] = (body["username"], time.time() + TOKEN_LIFETIME)
            ret = {"type": "login_response", "auth": token, "lifetime": TOKEN_LIFETIME}
        else:
            raise InputError("password_error")

    elif body["type"] == "logout":
        if body["auth"] in tokens:
            del tokens[body["auth"]]

    elif body["type"] == "is_logged_in":
        check_auth(body["auth"])

    elif body["type"] == "change_username":
        # TODO: this
        print("change username doesn't work")

    elif body["type"] == "change_password":
        # TODO: this
        print("change_password doesn't work")

    elif body["type"] == "add_recipe":
        username = check_auth(body["auth"])
        recipe_params = (body["recipe_name"], username, body["reference"])
        stores_params = (body["collection_id"], body["recipe_name"], username)
        cursor.execute("INSERT INTO Recipe VALUES(?,?,?)", recipe_params)
        # may need to check if collection id is valid?
        cursor.execute("INSERT INTO Stores VALUES(?,?,?)", stores_params)

        for ing in body["ingredients"]:
            cursor.execute("INSERT or IGNORE INTO Ingredient VALUES(?,?)",
                           (ing, body["collection_id"]))
            cursor.execute("INSERT INTO Composes VALUES(?,?,?,?)",
                           (body["recipe_name"], username, ing, body["collection_id"]))
        for alg in body["allergens"]:
            cursor.execute("INSERT or IGNORE INTO Allergen VALUES(?,?)",
                           (alg, body["collection_id"]))
            cursor.execute("INSERT INTO Contains VALUES(?,?,?,?)",
                           (body["recipe_name"], username, alg, body["collection_id"]))
        for aut in body["authors"]:
            cursor.execute("INSERT INTO Author VALUES(?,?,?)",
                           (aut, body["recipe_name"], username))

    elif body["type"] == "remove_recipe":
        username = check_auth(body["auth"])
        cursor.execute("DELETE FROM Recipe WHERE name = ? AND owner = ?",
                       (body["recipe_name"], username))

    # NOTE: Collection_id does not need to be passed in since recipe name + owner is a primary key
    elif body["type"] == "rename_recipe":
        username = check_auth(body["auth"])
        cursor.execute("UPDATE Recipe SET name == ? WHERE name = ? AND owner = ?",
                       (body["new_recipe_name"], body["recipe_name"], username))

    # NOTE: View min and max go from 0 to n-1 in index
    elif body["type"] == "filter_recipe_collection":
        p = (body["collection_id"], "%" + body["recipe_name"]+"%",)
        p += tuple(body["exclude_allergens"])
        p += tuple(body["exclude_ingredients"])

        includes = ""
        if len(body["include_allergens"]) != 0:
            p += tuple(body["include_allergens"])
            includes += f"""AND EXISTS (SELECT * FROM Contains WHERE
                                Contains.allergen_name IN ({",".join("?" * len(body["include_allergens"]))})
                                AND Stores.recipe_name = Contains.recipe_name
                                AND Stores.recipe_owner = Contains.recipe_owner)
                        """
        if len(body["include_ingredients"]) != 0:
            p += tuple(body["include_ingredients"])
            includes += f"""AND EXISTS (SELECT * FROM Composes WHERE
                                Composes.ingredient_name IN ({",".join("?" * len(body["include_ingredients"]))})
                                AND Stores.recipe_name = Composes.recipe_name
                                AND Stores.recipe_owner = Composes.recipe_owner)
                        """
        # Is this horribly inefficient? Probably less so *shrug*
        # TODO: maybe use COUNT, LIMIT, and OFFSET?
        q = f"""SELECT Stores.recipe_name, Stores.recipe_owner FROM Stores WHERE
                    Stores.collection_id = ?
                    AND Stores.recipe_name LIKE ?
                    AND NOT EXISTS (SELECT * FROM Contains WHERE
                        Contains.allergen_name IN ({",".join("?" * len(body["exclude_allergens"]))})
                        AND Stores.recipe_name = Contains.recipe_name
                        AND Stores.recipe_owner = Contains.recipe_owner)
                    AND NOT EXISTS (SELECT * FROM Composes WHERE
                        Composes.ingredient_name IN ({",".join("?" * len(body["exclude_ingredients"]))})
                        AND Stores.recipe_name = Composes.recipe_name
                        AND Stores.recipe_owner = Composes.recipe_owner)
                    {includes}
                ORDER BY Stores.recipe_name"""
        cursor.execute(q, p)
        temp = cursor.fetchall()

        count = len(temp)
        recipes = []
        try:
            recipes = temp[body["view_min"] : body["view_max"]]
        except:
            raise InputError("resource_error", "Bad view max/min")

        result = []
        for recipe in recipes:
            cur_dict = {"name": recipe[0], "owner": recipe[1]}
            cursor.execute("SELECT reference FROM Recipe WHERE name = ? AND owner = ?",
                           recipe)
            cur_dict["reference"] = cursor.fetchall()[0][0]

            cursor.execute("SELECT allergen_name FROM Contains WHERE recipe_name = ? AND recipe_owner = ?",
                           recipe)
            cur_dict["allergens"] = [x[0] for x in cursor.fetchall()]

            cursor.execute("SELECT ingredient_name FROM Composes WHERE recipe_name = ? AND recipe_owner = ?",
                           recipe)
            cur_dict["ingredients"] = [x[0] for x in cursor.fetchall()]

            cursor.execute("SELECT name FROM Author WHERE recipe_name = ? AND recipe_owner = ?",
                           recipe)
            cur_dict["authors"] = [x[0] for x in cursor.fetchall()]
            result.append(cur_dict)

        ret = {"type": "filter_recipe_collection_response", "recipes": result, "table_size": count}

    elif body["type"] == "rename_recipe_collection":
        username = check_auth(body["auth"])
        cursor.execute("UPDATE RecipeCollection SET name == ? WHERE id = ? AND manager = ?",
                       (body["new_name"], body["id"], username))

    # TODO: Big and random ids
    elif body["type"] == "add_recipe_collection":
        username = check_auth(body["auth"])
        cursor.execute("INSERT INTO RecipeCollection VALUES(?,?,?)",
                       (None, username, body["name"]))
        cursor.execute("SELECT id FROM RecipeCollection WHERE name = ? AND manager = ?",
                       (body["name"], username))
        temp = cursor.fetchall()
        co_id = temp[0][0]
        ret = {"type": "add_recipe_collection_response", "id": co_id}

    elif body["type"] == "remove_recipe_collection":
        username = check_auth(body["auth"])
        cursor.execute("DELETE FROM RecipeCollection WHERE id = ? AND manager = ?",
                       (body["id"], username))

    elif body["type"] == "get_owned_recipe_collections":
        username = check_auth(body["auth"])
        cursor.execute("SELECT id FROM RecipeCollection WHERE manager = ?",
                       (username,))
        temp = cursor.fetchall()
        ids = [t[0] for t in temp]
        ret = {"type": "get_owned_recipe_collections_response", "ids": ids}

    # NOTE: This query doesn't require authentication (no auth passed)
    elif body["type"] == "get_allergens_in_collection":
        cursor.execute("SELECT name FROM Allergen WHERE collection_id = ?",
                       (body["id"],))
        temp = cursor.fetchall()
        allergens = [t[0] for t in temp]
        ret = {"type": "get_allergen_in_collection_response", "allergens": allergens}

    # NOTE: This query doesn't require authentication (no auth passed)
    elif body["type"] == "get_ingredients_in_collection":
        cursor.execute("SELECT name FROM Ingredient WHERE collection_id = ?",
                       (body["id"],))
        temp = cursor.fetchall()
        ingredients = [t[0] for t in temp]
        ret = {"type": "get_ingredients_in_collection_response", "ingredients": ingredients}

    # NOTE: This query doesn't require authentication (no auth passed)
    elif body["type"] == "get_authors_in_collection":
        cursor.execute("""SELECT DISTINCT name FROM Author WHERE recipe_name =
                          (SELECT recipe_name FROM Stores WHERE collection_id = ? AND recipe_owner =
                          (SELECT manager FROM RecipeCollection WHERE collection_id = ?))""",
                       (body["id"], body["id"]))
        temp = cursor.fetchall()
        authors = [t[0] for t in temp]
        ret = {"type": "get_authors_in_collection_response", "authors": authors}

    elif body["type"] == "get_collection_exists":
        cursor.execute("SELECT name FROM RecipeCollection WHERE id = ?",
                       (body["id"],))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad collection ID")

    elif body["type"] == "get_collection_name":
        cursor.execute("SELECT name FROM RecipeCollection WHERE id = ?",
                       (body["id"],))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad collection ID")
        name = temp[0][0]
        ret = {"type": "get_collection_name_response", "collection_name": name}

    elif body["type"] == "count_recipes_in_collection":
        cursor.execute("SELECT COUNT(*) FROM Stores WHERE collection_id = ?",
                       (body["id"],))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad collection ID")
        recipes = temp[0][0]
        ret = {"type": "count_recipes_in_collection_response", "count": recipes}

    elif body["type"] == "change_reference":
        username = check_auth(body["auth"])
        cursor.execute("UPDATE Recipe SET reference == ? WHERE name = ? AND owner = ?",
                       (body["reference"], body["recipe_name"], username))

    elif body["type"] == "create_allergen":
        cursor.execute("INSERT or IGNORE INTO Allergen VALUES(?,?)",
                       (body["allergen_name"], body["collection_id"]))

    elif body["type"] == "add_allergen":
        username = check_auth(body["auth"])
        cursor.execute("SELECT collection_id FROM Stores WHERE recipe_name = ? AND owner = ?",
                       (body["recipe_name"], username))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad recipe name")
        col_id = temp[0][0]
        cursor.execute("INSERT INTO Contains VALUES(?,?,?,?)",
                       (body["recipe_name"], username, body["allergen"], col_id))

    elif body["type"] == "remove_allergen":
        username = check_auth(body["auth"])
        cursor.execute("SELECT collection_id FROM Stores WHERE recipe_name = ? AND owner = ?",
                        (body["recipe_name"], username))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad recipe name")
        col_id = temp[0][0]
        cursor.execute("""DELETE FROM Contains WHERE recipe_name = ?
                          AND recipe_owner = ?
                          AND allergen_name = ?
                          AND allergen_collection_id = ?""",
                       (body["recipe_name"], username, body["allergen"], col_id))

    elif body["type"] == "create_ingredient":
        cursor.execute("INSERT or IGNORE INTO Ingredient VALUES(?,?)",
                       (body["ingredient_name"], body["collection_id"]))

    elif body["type"] == "add_ingredient":
        username = check_auth(body["auth"])
        cursor.execute("SELECT collection_id FROM Stores WHERE recipe_name = ? AND owner = ?",
                       (body["recipe_name"], username))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad recipe name")
        col_id = temp[0][0]
        cursor.execute("INSERT INTO Composes VALUES(?,?,?,?)",
                       (body["recipe_name"], username, body["ingredient"], col_id))

    elif body["type"] == "remove_ingredient":
        username = check_auth(body["auth"])
        cursor.execute("SELECT collection_id FROM Stores WHERE recipe_name = ? AND owner = ?",
                       (body["recipe_name"], username))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad recipe name")
        col_id = temp[0][0]
        cursor.execute("""DELETE FROM Composes WHERE recipe_name = ?
                          AND recipe_owner = ?
                          AND ingredient_name = ?
                          AND ingredient_collection_id = ?""",
                       (body["recipe_name"], username, body["ingredient"], col_id))

    elif body["type"] == "add_author":
        username = check_auth(body["auth"])
        cursor.execute("INSERT INTO Author VALUES(?,?,?)",
                       (body["author"], body["recipe_name"], username))

    elif body["type"] == "remove_author":
        username = check_auth(body["auth"])
        cursor.execute("""DELETE FROM Author WHERE recipe_name = ?
                          AND recipe_owner = ?
                          AND name = ?""",
                       (body["recipe_name"], username, body["author"]))

    else:
        raise InputError("type_error")

    return ret


class RequestHandler(server.BaseHTTPRequestHandler):
    def do_GET(self):
        p = self.path
        if p.startswith("/recipeapp"):
            p = p[10:]

        ret = 200
        if p == "/":
            p = "/index.html"
        elif p.startswith("/collection/"):
            p = "/index.html"
        elif p not in SERVABLE:
            p = "/index.html"
            ret = 404

        self.send_response(ret)
        self.send_header("content-type", SERVABLE[p][1])
        self.end_headers()
        self.wfile.write(SERVABLE[p][0])
        return ret

    def do_POST(self):
        p = self.path
        if p.startswith("/recipeapp"):
            p = p[10:]
        length = int(self.headers["content-length"])
        body = self.rfile.read(length)
        if p.startswith("/api"):
            ret = {"type": "internal_server_error", "message": "Eek!"}
            ret_type = 500
            try:
                ret = do_thing_safely(json.loads(body.decode()))
                ret_type = 200
            except json.decoder.JSONDecodeError as E:
                ret = {"type": "parse_error"}
                ret_type = 400
            except KeyError as E:
                ret = {"type": "key_error", "key": E.args[0]}
                ret_type = 400
            except InputError as E:
                if E.msg == None:
                    ret = {"type": E.t}
                else:
                    ret = {"type": E.t, "message": E.msg}
                ret_type = 400
            except Exception as E:
                msg = traceback.format_exc()
                ret = {"type": "internal_server_error", "message": msg}
                ret_type = 500
                print(msg)
            self.send_response(ret_type)
            self.send_header("content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(ret).encode())
            return ret_type

        print(f"invalid post request: {p}")
        self.send_response(404)
        self.send_header("content-type", EXTENSIONS["txt"])
        self.end_headers()
        self.wfile.write(b"invalid post request")
        return 404


if not os.path.isfile("recipe.db"):
    conn = sqlite3.connect("recipe.db")
    sqlfile = open('init.sql').read()
    with conn:
        cur = conn.cursor()
        cur.executescript(sqlfile)
    # !!!!!!! THIS CODE IS INVALID, PLEASE USE "do_thing_safely" !!!!!!!!
    # testing code
    #v = {"type": "add_recipe_collection", "auth": "cat", "name": "Cat Food Recipes"}
    #print(do_thing(v))
    #v = {"type": "add_recipe_collection", "auth": "cat", "name": "Dog Food Recipes"}
    #print(do_thing(v))
    #v = {"type": "add_recipe", "auth": "s", "collection_id": 1, "recipe_name": "tunamelt",
    #     "reference": "kibbie's website", "authors": ["me", "my mom"], "ingredients": ["pecans", "butter", "kibble"],
    #     "allergens": ["peanuts", "shellfish"]}
    #do_thing(v)
    #v = {"type": "add_recipe", "auth": "s", "collection_id": 1, "recipe_name": "cookies",
    #     "reference": "Frankie's website", "authors": ["Breanna"], "ingredients": ["sugar", "spice", "chicken"],
    #     "allergens": []}
    #do_thing(v)
    #v = {"type": "filter_recipe_collection", "collection_id": 1, "recipe_name": "s", "include_allergens": [],
    #     "exclude_allergens": ["peanuts"], "include_ingredients": [], "exclude_ingredients": ["sugar"], "authors": [],
    #     "view_min": 0, "view_max": 1,
    #     }
    #print(do_thing(v))
    # testing code
    # the following needs to be added back once account queries are implemented
    # can't test otherwise due to foreign key constraints
    # add FOREIGN KEY(managed_by) REFERENCES Account(username) to Recipe collection
    # add FOREIGN KEY(owned_by) REFERENCES Account(username) to Recipe

    print("meow >:3 (db created)")
    conn.close()


ser = server.ThreadingHTTPServer(("", 8008), RequestHandler)

ser.serve_forever()

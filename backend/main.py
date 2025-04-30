import base64
import hashlib
from http import server
import json
import os
import random
import secrets
import sqlite3
import sys
import string
import threading
import time
import traceback

if len(sys.argv) == 1:
    PORT = 8008
elif len(sys.argv) == 2:
    PORT = int(sys.argv[1])
else:
    print("Usage: main.py [PORT]")
    exit(1)

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

def check_creds(cursor, username, password):
    cursor.execute("SELECT password_hash, password_salt FROM Account WHERE username = ?",
                    (username,))
    results = cursor.fetchall()
    if len(results) != 1:
        return False
    r = results[0]
    hash_bytes = base64.b64decode(r[0].encode("utf-8"))
    salt_bytes = base64.b64decode(r[1].encode("utf-8"))
    trial_hash_bytes = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt_bytes, 100_000)
    return hash_bytes == trial_hash_bytes

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
        if check_creds(cursor, body["username"], body["password"]):
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

    # TODO: unique constraint failed
    elif body["type"] == "change_username":
        username = check_auth(body["auth"])
        if check_creds(cursor, username, body["password"]):
            tokens[body["auth"]] = (username, tokens[body["auth"]][1])
            cursor.execute("UPDATE Account SET username == ? WHERE username = ?",
                           (body["new_username"], username))
        else:
            raise InputError("password_error")

    elif body["type"] == "change_password":
        username = check_auth(body["auth"])
        if check_creds(cursor, username, body["password"]):
            salt = secrets.token_bytes(32)
            iterations = 100_000
            hash_bytes = hashlib.pbkdf2_hmac("sha256", body["new_password"].encode("utf-8"), salt, iterations)
            hash_str = base64.b64encode(hash_bytes).decode("utf-8")
            salt_str = base64.b64encode(salt).decode("utf-8")
            cursor.execute("UPDATE Account SET password_hash == ?, password_salt == ? WHERE username = ?",
                           (hash_str, salt_str, username))
        else:
            raise InputError("password_error")

    elif body["type"] == "add_recipe":
        username = check_auth(body["auth"])
        cursor.execute("SELECT manager FROM RecipeCollection WHERE id = ?",
                       (body["collection_id"],))
        temp = cursor.fetchall()
        if len(temp) != 1:
            raise InputError("resource_error", "Bad collecion ID")
        manager = temp[0][0]
        if manager != username:
            InputError("resource_error", "Recipe collection owned by a different user!")
        recipe_params = (body["recipe_name"], username, body["reference"])
        stores_params = (body["collection_id"], body["recipe_name"], username)
        cursor.execute("INSERT INTO Recipe VALUES(?,?,?)", recipe_params)
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
        if len(temp) != 0:
            if body["random"]:
                recipes = random.choices(temp, k=(body["view_max"] - body["view_min"]))
            else:
                recipes = temp[body["view_min"] : body["view_max"]]

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

ser = server.ThreadingHTTPServer(("", PORT), RequestHandler)

print(f"Opening web server on port {PORT}...")

ser.serve_forever()

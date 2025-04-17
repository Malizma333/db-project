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


# return username, if it fails return -1
def check_auth(token):
    if token in tokens:
        if time.time() < tokens[token][1]:
            return tokens[token][0]
        else:
            del tokens[token]
    raise InputError("auth_token_error")


# This is where most db calls get handled. takes in parsed json. outputs object
# ready to be run through `dumps`
def do_thing(body):
    ret = None
    with db_lock:
        conn = sqlite3.connect('recipe.db')
        cursor = conn.cursor()
        cursor.execute("PRAGMA foreign_keys = ON;")
        if body["type"] == "login":
            cursor.execute("SELECT password_hash, password_salt FROM Account WHERE username = ?", (body["username"],))
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
            print("logout doesn't work")
        elif body["type"] == "is_logged_in":
            check_auth(body["auth"])
        elif body["type"] == "change_username":
            print("change username doesn't work")
        elif body["type"] == "change_password":
            print("change_password doesn't work")

        # stuff above not implemented
        elif body["type"] == "add_recipe":
            username = check_auth(body["auth"])
            recipe_params = (body["recipe_name"], body["reference"], username)
            stores_params = (body["collection_id"], body["recipe_name"], username)
            cursor.execute(f"""INSERT INTO Recipe VALUES(?,?,?)""", recipe_params)
            # may need to check if collection id is valid?
            cursor.execute(f"""INSERT INTO Stores
            VALUES(?,?,?)""", stores_params)
            for ing in body["ingredients"]:
                cursor.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [ing])
                cursor.execute(f"""INSERT INTO Composes VALUES(?,?,?)""",
                                (body["recipe_name"], username, ing))
            for alg in body["allergens"]:
                cursor.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [alg])
                cursor.execute(f"""INSERT INTO Contains VALUES(?,?,?)""",
                                (body["recipe_name"], username, alg))
            for aut in body["authors"]:
                cursor.execute(f"""INSERT INTO Author VALUES(?,?,?)""",
                                (body["recipe_name"], username, aut))

            conn.commit()

        elif body["type"] == "remove_recipe":
            username = check_auth(body["auth"])
            cursor.execute("DELETE FROM Recipe WHERE recipe_name = ? "
                            "AND owned_by = ?", (body["recipe_name"], username))
            conn.commit()

        # NOTE: Collection_id does not need to be passed in since recipe name is a primary key already (I think)
        elif body["type"] == "rename_recipe":
            username = check_auth(body["auth"])
            params = (body["new_recipe_name"], body["recipe_name"], username)
            cursor.execute(f"""UPDATE Recipe SET recipe_name == ?
            WHERE recipe_name = ? AND owned_by = ?""", params)
            conn.commit()

        # TODO NOT FINISHED
        elif body["type"] == "filter_recipe_collection":
            ings = tuple(body["exclude_ingredients"])
            algs = tuple(body["exclude_allergens"])
            params = algs + ings + tuple([body["collection_id"]])
            print(params)
            cursor.execute(f"""SELECT * FROM STORES AS S 
            WHERE NOT EXISTS (SELECT * FROM Contains AS Cot WHERE Cot.allergen_name IN ({','.join(['?'] * len(body["exclude_allergens"]))})
            AND S.recipe = Cot.recipe_name AND Cot.owned_by = S.owned_by)
            AND NOT EXISTS (SELECT * FROM Composes AS Com WHERE Com.ingredient_name IN ({','.join(['?'] * len(body["exclude_ingredients"]))})
            AND S.recipe = Com.recipe_name AND S.owned_by = Com.owned_by)
            AND S.collection_id = ?""", (params))
            # JOIN Contains AS Cot ON S.recipe = Cot.recipe_name AND S.owned_by = Cot.owned_by
            # JOIN Composes AS Com ON S.recipe = Com.recipe_name AND S.owned_by = Com.owned_by
            # (Cot.allergen_name IN ({','.join(['?']*len(body["exclude_allergens"]))})
            # OR Com.ingredient_name IN ({','.join(['?']*len(body["exclude_ingredients"]))}));, [body["collection_id"], algs, ings])

            temp = cursor.fetchall()
            conn.commit()
            stuff = []
            for t in temp:
                stuff.append(t)
            ret = {"type": "get_allergen_in_collection_response", "recipe&owned": stuff}




        elif body["type"] == "rename_recipe_collection":
            username = check_auth(body["auth"])
            params = (body["new_name"], body["id"], username)
            cursor.execute(f"""UPDATE RecipeCollection SET collection_name == ?
                            WHERE collection_id = ? AND managed_by = ?""", params)
            conn.commit()

        elif body["type"] == "add_recipe_collection":
            username = check_auth(body["auth"])
            collect_params = (body["name"], None, username)
            cursor.execute(f"""INSERT INTO RecipeCollection VALUES(?,?,?)""", collect_params)
            conn.commit()
            cursor.execute(f"""SELECT collection_id FROM RecipeCollection
            WHERE collection_name = ? AND managed_by = ?""", (body["name"], username))
            conn.commit()
            temp = cursor.fetchall()
            co_id = temp[0][0]
            ret = {"type": "add_recipe_collection_response", "id": co_id}

        elif body["type"] == "remove_recipe_collection":
            username = check_auth(body["auth"])
            params = (body["id"], username)
            cursor.execute(f"""DELETE FROM RecipeCollection WHERE collection_id = ?
            AND managed_by = ?""", params)
            conn.commit()

        elif body["type"] == "get_owned_recipe_collections":
            username = check_auth(body["auth"])
            cursor.execute("""SELECT collection_id FROM RecipeCollection
            WHERE managed_by = ?""", [username])
            temp = cursor.fetchall()
            conn.commit()
            ids = []
            for t in temp:
                ids.append(t[0])
            ret = {"type": "get_owned_recipe_collections_response", "ids": ids}

        # NOTE: This query doesn't require authentification (no auth passed)
        elif body["type"] == "get_allergens_in_collection":
            cursor.execute("""SELECT DISTINCT allergen_name FROM Contains WHERE recipe_name = 
            (SELECT recipe FROM STORES WHERE collection_id = ? AND owned_by = (SELECT managed_by 
            FROM RecipeCollection WHERE collection_id = ?))""", (body["id"], body["id"]))
            temp = cursor.fetchall()
            conn.commit()
            allergens = []
            for t in temp:
                allergens.append(t[0])
            ret = {"type": "get_allergen_in_collection_response", "allergens": allergens}

        # NOTE: This query doesn't require authentification (no auth passed)
        elif body["type"] == "get_ingredients_in_collection":
            cursor.execute("""SELECT DISTINCT ingredient_name FROM Composes WHERE recipe_name = 
                        (SELECT recipe FROM STORES WHERE collection_id = ? AND owned_by = (SELECT managed_by 
                        FROM RecipeCollection WHERE collection_id = ?))""", (body["id"], body["id"]))
            temp = cursor.fetchall()
            conn.commit()
            ingredients = []
            for t in temp:
                ingredients.append(t[0])
            ret = {"type": "get_ingredients_in_collection_response", "ingredients": ingredients}

            # NOTE: This query doesn't require authentification (no auth passed)
        elif body["type"] == "get_authors_in_collection":
            cursor.execute("""SELECT DISTINCT author_name FROM Author WHERE recipe_name = 
                                (SELECT recipe FROM STORES WHERE collection_id = ? AND owned_by = (SELECT managed_by 
                                FROM RecipeCollection WHERE collection_id = ?))""", (body["id"], body["id"]))
            temp = cursor.fetchall()
            conn.commit()
            authors = []
            for t in temp:
                authors.append(t[0])
            ret = {"type": "get_authors_in_collection_response", "authors": authors}

        elif body["type"] == "get_collection_name":
            cursor.execute(f"""SELECT collection_name FROM RecipeCollection WHERE collection_id = ?""", [body["id"]])
            temp = cursor.fetchall()
            conn.commit()
            if len(temp) != 1:
                raise InputError("resource_error", "Bad collection ID")
            name = temp[0][0]
            ret = {"type": "get_collection_name_response", "collection_name": name}

        elif body["type"] == "count_recipes_in_collection":
            cursor.execute("""SELECT COUNT(*) FROM Stores 
            WHERE collection_id = ?""", [body["id"]])
            temp = cursor.fetchall()
            conn.commit()
            recipes = temp[0][0]
            ret = {"type": "count_recipes_in_collection_response", "count": recipes}

        elif body["type"] == "change_reference":
            username = check_auth(body["auth"])
            params = (body["reference"], body["recipe_name"], username)
            cursor.execute(f"""UPDATE Recipe SET reference == ?
            WHERE recipe_name = ? AND owned_by = ?""", params)
            conn.commit()

        elif body["type"] == "add_allergen":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["allergen"])
            cursor.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [body["allergen"]])
            cursor.execute(f"""INSERT INTO Contains VALUES(?,?,?)""", params)
            conn.commit()

        elif body["type"] == "append_allergen":
            cursor.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [body["allergen_name"]])
            conn.commit()

        elif body["type"] == "remove_allergen":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["allergen"],)
            cursor.execute(f"""DELETE FROM Contains WHERE recipe_name = ? AND owned_by = ?
            AND allergen_name = ?""", params)
            conn.commit()

        elif body["type"] == "add_ingredient":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["ingredient"])
            cursor.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [body["ingredient"]])
            cursor.execute(f"""INSERT INTO Composes VALUES(?,?,?)""", params)
            conn.commit()

        elif body["type"] == "append_ingredient":
            cursor.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [body["ingredient_name"]])
            conn.commit()

        elif body["type"] == "remove_ingredient":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["ingredient"],)
            cursor.execute(f"""DELETE FROM Composes WHERE recipe_name = ? AND owned_by = ?
                            AND ingredient_name = ?""", params)
            conn.commit()

        elif body["type"] == "add_author":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["author"])
            cursor.execute(f"""INSERT INTO Author VALUES(?,?,?)""", params)
            conn.commit()

        elif body["type"] == "remove_author":
            username = check_auth(body["auth"])
            params = (body["recipe_name"], username, body["author"],)
            cursor.execute(f"""DELETE FROM Author WHERE recipe_name = ? AND owned_by = ?
                                            AND author_name = ?""", params)
            conn.commit()

        conn.close()
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
                ret = do_thing(json.loads(body.decode()))
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
    cur = conn.cursor()
    sqlfile = open('init.sql').read().split('\n\n')
    for table in sqlfile:
        cur.execute(table)
    # testing code
    #v = {"type": "add_recipe_collection", "auth": "cat", "name": "Cat Food Recipies"}
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
    # for remove ingredient and allergen: should I remove these from alg/ing
    # if there are none in any current recipies?

    conn.commit()
    print("meow >:3")
    conn.close()

# v = {"type": "login", "username": "robert!!", "password": "my password" }
# print(do_thing(v))
# v = {"type": "login", "username": "robert!!", "password": "my passwor" }
# print(do_thing(v))
# v = {"type": "login", "username": "robert!", "password": "my password" }
# print(do_thing(v))
# v = {"type": "login", "username": "robert", "password": "my passwor" }
# print(do_thing(v))

ser = server.ThreadingHTTPServer(("", 8008), RequestHandler)

ser.serve_forever()

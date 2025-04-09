import threading
from http import server
import json
import os
import string
import sqlite3

FILE_ROOT = os.path.join("..", "frontend", "dist")

EXTENSIONS = {
    "html": "text/html",
    "ico": "image/x-icon",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "json": "application/json",
}

SERVABLE = dict()
for root,dirs,files in os.walk(FILE_ROOT):
    for f_name in files:
        full_name = os.path.join(root, f_name)
        extension = f_name.split(".")[-1]
        internal = full_name[len(FILE_ROOT):].replace("\\", "/")
        with open(full_name, "rb") as f:
            SERVABLE[internal] = (f.read(), EXTENSIONS[extension])

TOKEN_LENGTH = 30
TOKEN_CHARS = string.ascii_letters + string.digits

db_lock = threading.Lock()

# return username, if it fails return -1
def check_auth(token):
    return "username"

# This is where most db calls get handled. takes in parsed json. outputs object
# ready to be run through `dumps`
def do_thing(body):
    ret = None
    with db_lock:
        conn = sqlite3.connect('recipe.db')
        conn.execute("PRAGMA foreign_keys = ON;")
        if body["type"] == "login":
            print("login doesn't work")
        elif body["type"] == "logout":
            print("logout doesn't work")
        elif body["type"] == "is_logged_in":
            print("is logged in doesn't work")
        elif body["type"] == "change_username":
            print("change username doesn't work")
        elif body["type"] == "change_password":
            print("change_password doesn't work")

        # stuff above not implemented
        elif body["type"] == "add_recipe":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                recipe_params = (body["recipe_name"], body["reference"], username)
                stores_params = (body["collection_id"], body["recipe_name"])
                conn.execute(f"""INSERT INTO Recipe VALUES(?,?,?)""", recipe_params)
                # may need to check if collection id is valid?
                conn.execute(f"""INSERT INTO Stores 
                VALUES(?,?)""", stores_params)
                for ing in body["ingredients"]:
                    conn.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [ing])
                    conn.execute(f"""INSERT INTO Composes VALUES(?,?)""", (body["recipe_name"], ing))
                for alg in body["allergens"]:
                    conn.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [alg])
                    conn.execute(f"""INSERT INTO Contains VALUES(?,?)""", (body["recipe_name"], alg))
                for aut in body["authors"]:
                    conn.execute(f"""INSERT INTO Author VALUES(?,?)""", (body["recipe_name"], aut))
                conn.commit()

        elif body["type"] == "remove_recipe":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                conn.execute("DELETE FROM Recipe WHERE recipe_name = ?", [body["recipe_name"]])
                conn.commit()

        # NOTE: Collection_id does not need to be passed in since recipe name is a primary key already (I think)
        elif body["type"] == "rename_recipe":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["new_recipe_name"], body["recipe_name"], username)
                conn.execute("""UPDATE Recipe SET recipe_name == ? 
                WHERE recipe_name = ? AND owned_by = ?""", params)
                conn.commit()
        # TODO
        elif body["type"] == "filter_recipe_collection":
            print("not implemented yet")

        elif body["type"] == "rename_recipe_collection":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["new_name"], body["id"], username)
                conn.execute("""UPDATE RecipeCollection SET collection_name == ? 
                                WHERE collection_id = ? AND managed_by = ?""", params)
                conn.commit()

        elif body["type"] == "add_recipe_collection":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                # TODO: have way to generate collection IDs
                collect_params = (body["name"], 123, username)
                conn.execute(f"""INSERT INTO RecipeCollection VALUES(?,?,?)""", collect_params)
                conn.commit()

        elif body["type"] == "remove_recipe_collection":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["id"], username)
                conn.execute("""DELETE FROM RecipeCollection WHERE collection_id = ?
                AND managed_by = ?""", params)
                conn.commit()

        # TODO: ALL OF THESE
        elif body["type"] == "get_owned_recipe_collections":
            print("not implemented yet")
        elif body["type"] == "get_allergens_in_collection":
            print("not implemented yet")
        elif body["type"] == "get_ingredients_in_collection":
            print("not implemented yet")
        elif body["type"] == "count_recipes_in_collection":
            print("not implemented yet")

        # TODO: currently working on these
        elif body["type"] == "change_reference":
            print("not implemented yet")
        elif body["type"] == "add_allergen":
            print("not implemented yet")
        elif body["type"] == "remove_allergen":
            print("not implemented yet")
        elif body["type"] == "add_ingredient":
            print("not implemented yet")
        elif body["type"] == "remove_ingredient":
            print("not implemented yet")
        elif body["type"] == "add_author":
            print("not implemented yet")
        elif body["type"] == "remove_author":
            print("not implemented yet")


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
        elif p not in SERVABLE:
            p = "/404.html"
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
            ret = do_thing(json.loads(body.decode()))
            self.send_response(200)
            self.send_header("content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(ret).encode())
            return 200

        self.send_response(404)
        self.send_header("content-type", SERVABLE["/404.html"][1])
        self.end_headers()
        self.wfile.write(SERVABLE["/404.html"][0])
        return 404

if not os.path.isfile("recipe.db"):
    conn = sqlite3.connect("recipe.db")
    cur = conn.cursor()
    sqlfile = open('init.sql').read().split('\n\n')
    for table in sqlfile:
        cur.execute(table)
    #testing code
    #v = {"type": "add_recipe_collection", "auth": "cat", "name": "Cat Food Recipies"}
    #do_thing(v)
    #v = {"type": "add_recipe", "auth": "s", "collection_id": 123, "recipe_name": "tunamelt", "reference": "kibbie's website", "authors": ("me", "my mom"), "ingredients": ("pecans", "butter", "kibble"), "allergens": ("peanuts", "shellfish")}
    #do_thing(v)
    #r = {"type": "remove_recipe_collection", "auth": "c", "id": 123}
    #do_thing(r)
    #testing code
    # the following needs to be added back once account queries are implemented
    # can't test otherwise due to foreign key constraints
    # add FOREIGN KEY(managed_by) REFERENCES Account(username) to Recipe collection
    # add FOREIGN KEY(owned_by) REFERENCES Account(username) to Recipe

    conn.commit()
    print("meow >:3")
    conn.close()

ser = server.ThreadingHTTPServer(("",8008), RequestHandler)

ser.serve_forever()

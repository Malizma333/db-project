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
        cursor = conn.cursor()
        cursor.execute("PRAGMA foreign_keys = ON;")
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
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                cursor.execute("DELETE FROM Recipe WHERE recipe_name = ? "
                             "AND owned_by = ?", (body["recipe_name"], username))
                conn.commit()

        # NOTE: Collection_id does not need to be passed in since recipe name is a primary key already (I think)
        elif body["type"] == "rename_recipe":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["new_recipe_name"], body["recipe_name"], username)
                cursor.execute(f"""UPDATE Recipe SET recipe_name == ? 
                WHERE recipe_name = ? AND owned_by = ?""", params)
                conn.commit()
        # TODO NOT FINISHED
        #elif body["type"] == "filter_recipe_collection":
        #    cursor.execute(f"""SELECT R.recipe_name, A.author_name, R.reference, Cot.allergen_name
        #    Com.ingredient_name, R.owned_by FROM
        #    ((SELECT recipe, owned_by FROM Stores S WHERE collection_id = ? AND owned_by = ?)
        #    JOIN Author A ON S.recipe = A.recipe_name AND S.owned_by = A.owned_by
        #    JOIN Recipe R ON S.recipe = R.recipe_name AND S.owned_by = R.owned_by
        #    JOIN Contains Cot ON S.recipe = Cot.recipe_name AND S.owned_by = Cot.owned_by
        #    JOIN Composes Com ON S.recipe = Com.recipe_name AND S.owned_by = Com.owned_by)
        #    WHERE """)


        elif body["type"] == "rename_recipe_collection":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["new_name"], body["id"], username)
                cursor.execute(f"""UPDATE RecipeCollection SET collection_name == ? 
                                WHERE collection_id = ? AND managed_by = ?""", params)
                conn.commit()

        elif body["type"] == "add_recipe_collection":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
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
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["id"], username)
                cursor.execute(f"""DELETE FROM RecipeCollection WHERE collection_id = ?
                AND managed_by = ?""", params)
                conn.commit()

        elif body["type"] == "get_owned_recipe_collections":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
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

        elif body["type"] == "count_recipes_in_collection":
            cursor.execute("""SELECT COUNT(*) FROM Stores 
            WHERE collection_id = ?""", [body["id"]])
            temp = cursor.fetchall()
            conn.commit()
            recipes = temp[0][0]
            ret = {"type": "count_recipes_in_collection_response", "count": recipes}

        elif body["type"] == "change_reference":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["reference"], body["recipe_name"], username)
                cursor.execute(f"""UPDATE Recipe SET reference == ? 
                WHERE recipe_name = ? AND owned_by = ?""", params)
                conn.commit()

        elif body["type"] == "add_allergen":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["recipe_name"], username, body["allergen"])
                cursor.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [body["allergen"]])
                cursor.execute(f"""INSERT INTO Contains VALUES(?,?,?)""", params)
                conn.commit()

        elif body["type"] == "append_allergen":
            cursor.execute(f"""INSERT or IGNORE INTO Allergen VALUES(?)""", [body["allergen_name"]])
            conn.commit()

        elif body["type"] == "remove_allergen":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["recipe_name"], username, body["allergen"],)
                cursor.execute(f"""DELETE FROM Contains WHERE recipe_name = ? AND owned_by = ? 
                AND allergen_name = ?""",params)
                conn.commit()

        elif body["type"] == "add_ingredient":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["recipe_name"], username, body["ingredient"])
                cursor.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [body["ingredient"]])
                cursor.execute(f"""INSERT INTO Composes VALUES(?,?,?)""", params)
                conn.commit()

        elif body["type"] == "append_ingredient":
            cursor.execute(f"""INSERT or IGNORE INTO Ingredient VALUES(?)""", [body["ingredient_name"]])
            conn.commit()

        elif body["type"] == "remove_ingredient":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["recipe_name"], username, body["ingredient"],)
                cursor.execute(f"""DELETE FROM Composes WHERE recipe_name = ? AND owned_by = ? 
                                AND ingredient_name = ?""", params)
                conn.commit()

        elif body["type"] == "add_author":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
                params = (body["recipe_name"], username, body["author"])
                cursor.execute(f"""INSERT INTO Author VALUES(?,?,?)""", params)
                conn.commit()

        elif body["type"] == "remove_author":
            username = check_auth(body["auth"])
            if username == -1:
                ret = {"type": "bad_auth_token"}
            else:
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
    #print(do_thing(v))
    #v = {"type": "add_recipe_collection", "auth": "cat", "name": "Dog Food Recipes"}
    #print(do_thing(v))
    #v = {"type": "add_recipe", "auth": "s", "collection_id": 1, "recipe_name": "tunamelt", "reference": "kibbie's website", "authors": ["me", "my mom"], "ingredients": ["pecans", "butter", "kibble"], "allergens": ["peanuts", "shellfish"]}
    #do_thing(v)
    #v = {"type": "add_recipe", "auth": "s", "collection_id": 2, "recipe_name": "cookies", "reference": "Frankie's website", "authors": ["Breanna"], "ingredients": ["sugar", "spice", "chicken"], "allergens": []}
    #do_thing(v)
    r = {"type": "append_allergen", "allergen_name": "coconuts"}
    do_thing(r)
    #print(do_thing(r))
    #testing code
    # the following needs to be added back once account queries are implemented
    # can't test otherwise due to foreign key constraints
    # add FOREIGN KEY(managed_by) REFERENCES Account(username) to Recipe collection
    # add FOREIGN KEY(owned_by) REFERENCES Account(username) to Recipe
    # for remove ingredient and allergen: should I remove these from alg/ing
    # if there are none in any current recipies?

    conn.commit()
    print("meow >:3")
    conn.close()

ser = server.ThreadingHTTPServer(("",8008), RequestHandler)

ser.serve_forever()

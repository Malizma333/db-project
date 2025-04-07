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
    return

# This is where most db calls get handled. takes in parsed json. outputs object
# ready to be run through `dumps`
def do_thing(body):
    ret = None
    with db_lock:
        conn = sqlite3.connect('recipe.db')
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
                conn.execute(f"""INSERT INTO Recipe(collection_id, recipe_name, reference, authors, ingredients,
                allergens) VALUES({body["collection_id"]},
                )""")

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
    conn.commit()
    print("meow >:3")
    conn.close()

ser = server.ThreadingHTTPServer(("",8008), RequestHandler)

ser.serve_forever()

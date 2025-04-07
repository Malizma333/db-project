from http import server
import json
import os
import queue
import random
import string

FILE_ROOT = os.path.join("..", "frontend", "dist")

EXTENSIONS = {
    "html": "text/html",
    "ico": "image/x-icon",
    "js": "text/javascript",
    "css": "text/css",
    "json": "application/json",
}

SERVABLE = dict()
for root,dirs,files in os.walk(FILE_ROOT):
    for f_name in files:
        full_name = os.path.join(root, f_name)
        extension = f_name.split(".")[-1]
        with open(full_name, "rb") as f:
            print(full_name)
            print(full_name[len(FILE_ROOT):])
            SERVABLE[full_name[len(FILE_ROOT):].replace("\\", "/")] = (f.read(), EXTENSIONS[extension])

# SERVABLE = {
#     "index.html": ["index.html", "text/html"],
#     "assets/favicon-D8EyK4Iu.ico": ["assets/favicon-D8EyK4Iu.ico", "image/x-icon"],
#     "assets/index-COw7SYG4.js": ["assets/index-COw7SYG4.js", "text/javascript"],
#     "assets/index-D_6z8VR5.css": ["assets/index-D_6z8VR5.css", "text/css"],
#     "assets/manifest-D2PoeSCd.json": ["assets/manifest-D2PoeSCd.json", "application/json"],
#     "404.html": ["404.html", "text.html"],
# }
# for f_name in SERVABLE:
#     with open(f_name, "rb") as f:
#         SERVABLE[f_name][0] = f.read()

TOKEN_LENGTH = 30
TOKEN_CHARS = string.ascii_letters + string.digits

def do_thing(body):
    print(f"POST request with body {body}")
    return "{\"type\":\"response\",\"greeting\":\"heyyyyyy\"}".encode()

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
            p = p[11:]
        length = int(self.headers["content-length"])
        body = self.rfile.read(length)
        if p.startswith("dbrequest"):
            ret = do_thing(body.decode())
            self.send_response(200)
            self.send_header("content-type", "application/json")
            self.end_headers()
            self.wfile.write(ret)
            return 200

ser = server.ThreadingHTTPServer(("",8008), RequestHandler)

ser.serve_forever()

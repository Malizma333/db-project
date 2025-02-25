from websockets.sync.server import serve
import time

def echo(websocket):
  i = 0
  while True:
    i += 1
    time.sleep(1)
    websocket.send(str(i))

def main():
  print("main")
  with serve(echo, "", 5000) as server:
    server.serve_forever()

main()
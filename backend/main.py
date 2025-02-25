from websockets.sync.server import serve
import time

def echo(websocket):
  print("echo")
  i = 0
  while True:
    i += 1
    time.sleep(4)
    websocket.send(str(i))

def main():
  print("main")
  with serve(echo, "localhost", 5000) as server:
    server.serve_forever()

main()
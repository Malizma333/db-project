import os
import sqlite3

if not os.path.isfile("recipe.db"):
    conn = sqlite3.connect("recipe.db")
    sqlfile = open('init.sql').read()
    with conn:
        cur = conn.cursor()
        cur.executescript(sqlfile)

    print("""
  __／l、             
（ﾟ､ ｡ ７         
  l  ~ヽ         
  じしf_,)ノ (db created)""")
    conn.close()

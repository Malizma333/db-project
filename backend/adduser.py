#!/bin/python3

import base64
import hashlib
import secrets
import sqlite3

conn = sqlite3.connect('recipe.db')
cursor = conn.cursor()
cursor.execute("PRAGMA foreign_keys = ON;")

username = input("username? ")
password = input("password? ")

# A lot of magic numbers here... I looked up reasonable values online *shrug*
# https://www.askpython.com/python/examples/storing-retrieving-passwords-securely

# Add some salt to the secret pan
salt = secrets.token_bytes(32)
iterations = 100_000

# Cook 100,000 hash browns, yum!
hash_bytes = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, iterations)

# Delicious base 64 encoding sauce, with utf-8 spices
hash_str = base64.b64encode(hash_bytes).decode("utf-8")
salt_str = base64.b64encode(salt).decode("utf-8")

# Breakfast is ready!
cursor.execute(f"INSERT INTO Account VALUES(?,?,?)", (username, hash_str, salt_str))
conn.commit()
conn.close()

#!/bin/python3

import base64
import getpass
import hashlib
import secrets
import sqlite3

# TODO: ask bre about how to do the db stuff?
# conn = sqlite3.connect('recipe.db')
# cursor = conn.cursor()

username = input("username? ")
password = getpass.getpass("password? ")

# A lot of magic numbers here... I looked up reasonable values online *shrug*
salt = secrets.token_bytes(32)
iterations = 100_000
hash_bytes = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, iterations)
hash_str = base64.b64encode(hash_bytes).decode("utf-8")
salt_str = base64.b64encode(salt).decode("utf-8")
print(hash_str)
print(salt_str)

cd backend

if command -v python3 &> /dev/null; then
  python3 init.py
  python3 adduser.py < ./test_user_creds.txt > /dev/null
  python3 main.py
else
  python init.py
  python adduser.py < ./test_user_creds.txt > /dev/null
  python main.py
fi

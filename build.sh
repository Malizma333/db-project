cd frontend
npm i --silent
npm run build
cd ..
cd backend
command -v python3 >/dev/null 2>&1 && python3 main.py
command -v python >/dev/null 2>&1 && python main.py

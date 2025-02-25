FROM python:3.13-slim
WORKDIR /usr/src/backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 5000
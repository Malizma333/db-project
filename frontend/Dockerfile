FROM node:18-alpine
WORKDIR /frontend-app
COPY package-lock.json ./
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
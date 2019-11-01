FROM node:12

RUN npm install -g expo-cli

WORKDIR /npm-build-server
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

ENV API_PORT=3000

# This is so gross, how to fix???
CMD API_IP=$(hostname -I | awk '{print $1}') npm start

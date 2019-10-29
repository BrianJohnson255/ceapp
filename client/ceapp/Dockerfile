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

CMD ["npm", "start"]

FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g nodemon

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
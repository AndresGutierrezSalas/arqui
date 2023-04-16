FROM node:latest

WORKDIR /api

COPY package*.json ./

RUN npm i -g nodemon

COPY . ./

EXPOSE 3000

CMD ["nodemon", "start"]
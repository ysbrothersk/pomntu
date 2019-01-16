FROM node:11.6.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "serve"]

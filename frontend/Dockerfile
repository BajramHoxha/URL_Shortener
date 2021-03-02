FROM node:13.12.0-alpine

WORKDIR /usr/src/URL_Shortener/frontend

COPY package*.json ./

RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
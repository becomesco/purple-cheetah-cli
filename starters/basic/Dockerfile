FROM node:10-slim

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY src/. /app/src
COPY public/. /app/public
COPY tsconfig.json /app

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm","start" ]
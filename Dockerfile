FROM node:8-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE ${APP_PORT}
CMD npm run start:be

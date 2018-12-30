FROM node:8-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE ${APP_PORT}
CMD npm run start:be

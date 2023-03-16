# vue ts vite, pnpm

FROM node:lts-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json /app

RUN pnpm install

COPY . /app

EXPOSE 5173
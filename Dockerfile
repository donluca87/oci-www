# Use Node.js 14 Alpine
FROM node:current-alpine as base

WORKDIR /src
COPY package*.json ./
EXPOSE 8080

FROM base as production
ENV NODE_ENV=production
#RUN npm ci
RUN npm install --quiet
COPY . ./
CMD ["node", "server.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . ./
CMD ["nodemon", "server.js"]

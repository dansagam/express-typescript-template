FROM node:alpine As development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g typescript

RUN npm install -g nodemon
RUN npm install -g corepack

RUN npm install 
COPY . .
EXPOSE 5200
RUN chown -R node /usr/src/app
USER node

#Build to project
RUN npm run build
# CMD ["npm", "start"]

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index"]

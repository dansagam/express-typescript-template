FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

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
CMD ["npm", "start"]

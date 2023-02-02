FROM node:lts-alpine
# ENV NODE_ENV=production

ENV NODE_VERSION 16.18.1 
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]

RUN yarn global add  typescript

RUN yarn global add nodemon
RUN yarn global add corepack
# RUN yarn global add concurrently

RUN yarn install 
COPY . .
EXPOSE 5821
RUN chown -R node /usr/src/app
USER node

RUN yarn prisma generate --schema ./prisma/schema.prisma

#Build to project
RUN yarn run build
CMD ["yarn", "run", "dev-main"]
# CMD ["yarn", "run", "dev"]

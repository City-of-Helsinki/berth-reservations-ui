# Pull node image with locked node version
FROM node:11.9.0

# Make guest app dir
RUN mkdir -p /usr/src/app

# Set workdir
WORKDIR /usr/src/app

COPY package.json package.json

COPY yarn.lock yarn.lock

COPY .env.example .env.development.local

RUN yarn install

CMD ["yarn", "start"]

# Pull node image with locked node version
FROM node:11.9.0

# Make guest app dir
RUN mkdir -p /usr/src/app

# Set workdir
WORKDIR /usr/src/app

COPY package.json package.json

RUN yarn install --silent

CMD ["yarn", "start"]
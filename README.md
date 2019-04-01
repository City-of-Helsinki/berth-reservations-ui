# Berth Reservation UI

[![Build Status](https://travis-ci.com/City-of-Helsinki/berth-reservations-ui.svg?branch=master)](https://travis-ci.com/City-of-Helsinki/berth-reservations-ui)

## Prerequisites

- Yarn
- Strong recommendation for an IDE: VSCode

### Recommended VSCode plugins:

- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Setup

After cloning this repository, create a new `.env.local` file from the provided `.env.example` file and configure it as needed:

```
$ cp .env.example .env.development.local
```

## Development

To start development environment, run:

```
$ yarn dev
```

This will start [the application](http://localhost:3000) and [the storybook](http://localhost:9001) for ports `3000` & `9001`

To only start the client:

```
$ yarn start
```

### Starting dockerized development environment

1. Check if Docker and docker CLI installed, port `3000` and `9000` is free, not occupied by running server.

2. Make sure you have env variables in `.env.development.local`, otherwise extend it from example by:
   ```
   $ cp .env.example .env.development.local
   ```
3. Start building docker image and start container:
   ```
   $ docker-compose up
   ```
4. Open `localhost:3000` on browser.

## Testing

End-to-end testing is created with Cypress.io framework. To run tests:

```
$ yarn test
```

## Useful docker command

- To rebuild the docker images:
  ```
  $ docker-compose up --force-recreate --build
  ```
- To enter inside docker container environment:
  ```
  $ docker-compose exec web sh
  ```
- Remove docker container if needed:
  ```
  $ docker rm -f berth-frontend
  ```
- Remove docker image:
  ```
  $ docker rmi berth-reservations-ui_web
  ```
- Running command inside Docker environment (test for example):
  (Make sure docker container is running)
  `$ docker-compose run web YOUR_COMMAND_HERE`
- Encounter `node-sass` issue ? try to go inside docker container environment and run `npm rebuild node-sass`

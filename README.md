# Berth Reservation UI

[![CI status](https://github.com/City-of-Helsinki/berth-reservations-ui/workflows/CI/badge.svg)](https://github.com/City-of-Helsinki/berth-reservations-ui/actions?query=workflow%3ACI)
[![Browser Tests status](https://github.com/City-of-Helsinki/berth-reservations-ui/workflows/Browser%20Tests/badge.svg)](https://github.com/City-of-Helsinki/berth-reservations-ui/actions?query=workflow%3A%22Browser+Tests%22)

## Prerequisites

- Yarn
- Strong recommendation for an IDE: VSCode

### Recommended VSCode plugins:

- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Setup

After cloning this repository, create a new `.env.development.local` file from the provided `.env` file:

```
$ cp .env .env.development.local
```

The default configuration uses the test environment as backend.

## Development

To start development environment, run:

```
$ yarn start
```

This will start [the application](http://localhost:3000) on port `3000`.

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

To run tests:

```
$ yarn test
```

## Browser tests

Browser tests are written in TypeScript with [TestCafe](https://devexpress.github.io/testcafe/) framework and they are run against [test environment](https://venepaikka.test.kuva.hel.ninja) in CI as GitHub Cron Job (daily) with Chrome (headless mode).

### How to run locally

Set test user login credentials

- Open `.env.development.local` and set `BROWSER_TESTS_UID` and `BROWSER_TESTS_PWD`

Running against test environment

- `yarn browser-test`

Running against local environment

- `yarn browser-test:local`

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

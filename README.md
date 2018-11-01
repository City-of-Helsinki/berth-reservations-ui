# Berth Reservation UI

## Prerequisites

- Yarn
- Strong recommendation for an IDE: VSCode

### Recommended VSCode plugins:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Setup

After cloning this repository, create a new `.env.local` file from the provided `.env.example` file and configure it as needed:

```
$ cp .env.example .env.development.local
```

## Development

To start development environment, run command:

```
$ yarn dev
```

This will start [the application](http://localhost:3000) and [the storybook](http://localhost:9001) for ports `3000` & `9001`

To only start the client:

```
$ yarn start
```

## Testing

End-to-end testing is created with Cypress.io framework. To run tests:

```
$ yarn test
```

import ApolloClient from 'apollo-boost';

const initApolloClient = () =>
  new ApolloClient({
    uri: 'https://venepaikka-api-gql.test.hel.ninja/graphql/',
    request: async operation => {
      const lng = window.location.pathname.slice(1, 3) || 'fi';
      const headers = {
        'Accept-Language': lng
      };
      operation.setContext({ headers });
    }
  });

export default initApolloClient;

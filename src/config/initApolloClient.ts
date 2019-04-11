import ApolloClient from 'apollo-boost';

const initApolloClient = () =>
  new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    request: async operation => {
      const lng = window.location.pathname.slice(1, 3) || 'fi';
      const headers = {
        'Accept-Language': lng
      };
      operation.setContext({ headers });
    }
  });

export default initApolloClient;

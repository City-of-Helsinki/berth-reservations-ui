import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import i18n from 'i18next';
import { ApolloLink } from 'apollo-link';
import { ErrorLink, onError } from 'apollo-link-error';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { gql } from 'graphql-tag';
import { setContext } from 'apollo-link-context';

import authService from './auth/authService';

const typeDefs = gql`
  type CurrentUser {
    id: ID!
    name: String
    email: String
  }
  extend type Query {
    currentUser: CurrentUser
  }
`;

const cache = new InMemoryCache({
  fragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: {
        types: [],
      },
    },
  }),
});
cache.writeData({ data: { currentUser: null } });

const authLink = setContext((_, { headers }) => {
  return authService.getUser().then((user) => {
    const apiTokens = user ? authService.getTokens() : null;
    return {
      headers: {
        ...headers,
        'Accept-Language': i18n.language,
        ...(apiTokens && { 'Api-Tokens': apiTokens }),
      },
    };
  });
});

export const errorHandler: ErrorLink.ErrorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line no-console
    console.error(graphQLErrors);
  }
  if (networkError) {
    // eslint-disable-next-line no-console
    console.error(networkError);
  }
};
export const errorLink = onError(errorHandler);

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, new HttpLink({ uri: process.env.REACT_APP_API_URL })]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
  cache,
  typeDefs,
  resolvers: {
    Query: {
      async currentUser() {
        const user = await authService.getUser();

        if (!user) return null;

        const { name, email, sub } = user.profile;

        return { __typename: 'CurrentUser', id: sub, name, email };
      },
    },
  },
});

export default apolloClient;

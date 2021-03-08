import ApolloClient, { gql } from 'apollo-boost';

import { getUser } from './auth/authService';

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

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: async (operation) => {
    const lng = window.location.pathname.slice(1, 3) || 'fi';
    const headers = {
      'Accept-Language': lng,
    };
    operation.setContext({ headers });
  },
  typeDefs,
  resolvers: {
    Query: {
      async currentUser() {
        const user = await getUser();

        if (!user) return null;

        const { name, email, sub } = user.profile;

        return { __typename: 'CurrentUser', id: sub, name, email };
      },
    },
  },
});

export default apolloClient;

import { gql } from 'graphql-tag';

export const OWN_BOATS_QUERY = gql`
  query OWN_BOATS {
    myProfile {
      id
      boats {
        edges {
          node {
            id
            name
            registrationNumber
          }
        }
      }
    }
  }
`;

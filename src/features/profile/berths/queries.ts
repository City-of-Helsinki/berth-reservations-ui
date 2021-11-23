import { gql } from 'graphql-tag';

const BERTH_APPLICATION_NODE = gql`
  fragment berthApplicationNodeFragment on BerthApplicationNode {
    id
    createdAt
    status
    harborChoices {
      harbor {
        id
        properties {
          name
          availabilityLevel {
            id
            title
          }
          electricity
          gate
          lighting
          wasteCollection
          water
        }
      }
    }
  }
`;

export const BERTHS_QUERY = gql`
  query BERTHS {
    myProfile {
      berthApplications {
        edges {
          node {
            ...berthApplicationNodeFragment
          }
        }
      }
    }
  }

  ${BERTH_APPLICATION_NODE}
`;

export const DELETE_BERTH_APPLICATION_MUTATION = gql`
  mutation DELETE_BERTH_APPLICATION($input: DeleteBerthApplicationMutationInput!) {
    deleteBerthApplication(input: $input) {
      clientMutationId
    }
  }
`;

export const EXTEND_BERTH_APPLICATION_MUTATION = gql`
  mutation EXTEND_BERTH_APPLICATION($input: ExtendBerthApplicationMutationInput!) {
    extendBerthApplication(input: $input) {
      clientMutationId
    }
  }
`;

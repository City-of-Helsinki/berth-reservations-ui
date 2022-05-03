import { gql } from 'graphql-tag';

const BERTH_APPLICATION_NODE = gql`
  fragment berthApplicationNodeFragment on BerthApplicationNode {
    id
    createdAt
    status
    harborChoices {
      priority
      harbor {
        id
        properties {
          name
          availabilityLevel {
            id
            title
            description
          }
          electricity
          gate
          lighting
          wasteCollection
          water
        }
      }
    }
    boat {
      id
      name
      registrationNumber
    }
  }
`;

export const BERTHS_QUERY = gql`
  query BERTHS {
    myProfile {
      id
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

export const UPDATE_BERTH_APPLICATION_MUTATION = gql`
  mutation UPDATE_BERTH_APPLICATION($input: UpdateBerthApplicationInput!) {
    updateBerthApplication(input: $input) {
      clientMutationId
    }
  }
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

import { gql } from 'graphql-tag';

export const UPDATE_WINTER_STORAGE_APPLICATION_MUTATION = gql`
  mutation UPDATE_WINTER_STORAGE_APPLICATION($input: UpdateWinterStorageApplicationInput!) {
    updateWinterStorageApplication(input: $input) {
      clientMutationId
    }
  }
`;

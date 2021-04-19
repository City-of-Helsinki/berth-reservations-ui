import { gql } from 'apollo-boost';

export const ACCEPT_BERTH_SWITCH_OFFER = gql`
  mutation AcceptBerthSwitchOffer($input: AcceptBerthSwitchOfferMutationInput!) {
    acceptBerthSwitchOffer(input: $input) {
      clientMutationId
    }
  }
`;

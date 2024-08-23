/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AcceptBerthSwitchOfferMutationInput } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: AcceptBerthSwitchOffer
// ====================================================

export interface AcceptBerthSwitchOffer_acceptBerthSwitchOffer {
  __typename: 'AcceptBerthSwitchOfferMutationPayload';
  clientMutationId: string | null;
}

export interface AcceptBerthSwitchOffer {
  acceptBerthSwitchOffer: AcceptBerthSwitchOffer_acceptBerthSwitchOffer | null;
}

export interface AcceptBerthSwitchOfferVariables {
  input: AcceptBerthSwitchOfferMutationInput;
}

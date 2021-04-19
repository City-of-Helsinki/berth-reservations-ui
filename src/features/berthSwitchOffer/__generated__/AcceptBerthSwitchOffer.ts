/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AcceptBerthSwitchOfferMutationInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AcceptBerthSwitchOffer
// ====================================================

export interface AcceptBerthSwitchOffer_acceptBerthSwitchOffer {
  __typename: "AcceptBerthSwitchOfferMutationPayload";
  clientMutationId: string | null;
}

export interface AcceptBerthSwitchOffer {
  /**
   * Accepts or rejects an offer for a berth switch application.
   * 
   * If the offer is accepted, it will terminate the old lease and create a new lease with the new berth.
   * 
   * If the offer is rejected, nothing is created and the related lease stays as is.
   * 
   * Errors:
   * 
   * **Requires permissions** to add and change berth leases and to change berth switch offers.
   * 
   * Errors:
   * * The passed berth switch offer ID doesn't exist
   * * The related lease must be in `PAID` status
   */
  acceptBerthSwitchOffer: AcceptBerthSwitchOffer_acceptBerthSwitchOffer | null;
}

export interface AcceptBerthSwitchOfferVariables {
  input: AcceptBerthSwitchOfferMutationInput;
}

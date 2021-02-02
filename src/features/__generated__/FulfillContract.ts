/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FulfillContractMutationInput } from "../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: FulfillContract
// ====================================================

export interface FulfillContract_fulfillContract {
  __typename: "FulfillContractMutationPayload";
  signingUrl: string | null;
}

export interface FulfillContract {
  fulfillContract: FulfillContract_fulfillContract | null;
}

export interface FulfillContractVariables {
  fulfillContractMutationInput: FulfillContractMutationInput;
}

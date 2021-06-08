/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddServiceConnectionMutationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddServiceConnection
// ====================================================

export interface AddServiceConnection_addServiceConnection {
  __typename: "AddServiceConnectionMutationPayload";
  clientMutationId: string | null;
}

export interface AddServiceConnection {
  addServiceConnection: AddServiceConnection_addServiceConnection | null;
}

export interface AddServiceConnectionVariables {
  input: AddServiceConnectionMutationInput;
}

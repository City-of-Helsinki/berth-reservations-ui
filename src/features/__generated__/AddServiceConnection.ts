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
  /**
   * Connect the currently authenticated user's profile to the given service.
   * 
   * Requires authentication.
   * 
   * Possible error codes:
   * 
   * * `SERVICE_CONNECTION_ALREADY_EXISTS_ERROR`: Returned if the currently authenticated user's profile is already connected to the given service.
   */
  addServiceConnection: AddServiceConnection_addServiceConnection | null;
}

export interface AddServiceConnectionVariables {
  input: AddServiceConnectionMutationInput;
}

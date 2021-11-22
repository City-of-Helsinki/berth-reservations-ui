/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteBerthApplicationMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DELETE_BERTH_APPLICATION
// ====================================================

export interface DELETE_BERTH_APPLICATION_deleteBerthApplication {
  __typename: "DeleteBerthApplicationMutationPayload";
  clientMutationId: string | null;
}

export interface DELETE_BERTH_APPLICATION {
  deleteBerthApplication: DELETE_BERTH_APPLICATION_deleteBerthApplication | null;
}

export interface DELETE_BERTH_APPLICATIONVariables {
  input: DeleteBerthApplicationMutationInput;
}

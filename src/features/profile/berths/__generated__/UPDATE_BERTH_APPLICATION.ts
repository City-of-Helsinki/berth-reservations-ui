/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateBerthApplicationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_BERTH_APPLICATION
// ====================================================

export interface UPDATE_BERTH_APPLICATION_updateBerthApplication {
  __typename: "UpdateBerthApplicationPayload";
  clientMutationId: string | null;
}

export interface UPDATE_BERTH_APPLICATION {
  updateBerthApplication: UPDATE_BERTH_APPLICATION_updateBerthApplication | null;
}

export interface UPDATE_BERTH_APPLICATIONVariables {
  input: UpdateBerthApplicationInput;
}

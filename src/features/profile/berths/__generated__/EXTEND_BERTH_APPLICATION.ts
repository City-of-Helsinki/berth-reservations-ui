/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExtendBerthApplicationMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EXTEND_BERTH_APPLICATION
// ====================================================

export interface EXTEND_BERTH_APPLICATION_extendBerthApplication {
  __typename: "ExtendBerthApplicationMutationPayload";
  clientMutationId: string | null;
}

export interface EXTEND_BERTH_APPLICATION {
  extendBerthApplication: EXTEND_BERTH_APPLICATION_extendBerthApplication | null;
}

export interface EXTEND_BERTH_APPLICATIONVariables {
  input: ExtendBerthApplicationMutationInput;
}

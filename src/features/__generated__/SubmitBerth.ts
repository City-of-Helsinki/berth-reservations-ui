/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateBerthApplicationMutationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitBerth
// ====================================================

export interface SubmitBerth_createBerthApplication {
  __typename: "CreateBerthApplicationMutationPayload";
  ok: boolean | null;
}

export interface SubmitBerth {
  createBerthApplication: SubmitBerth_createBerthApplication | null;
}

export interface SubmitBerthVariables {
  input: CreateBerthApplicationMutationInput;
}

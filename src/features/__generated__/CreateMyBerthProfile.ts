/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMyBerthProfileMutationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMyBerthProfile
// ====================================================

export interface CreateMyBerthProfile_createMyBerthProfile {
  __typename: "CreateMyBerthProfileMutationPayload";
  clientMutationId: string | null;
}

export interface CreateMyBerthProfile {
  createMyBerthProfile: CreateMyBerthProfile_createMyBerthProfile | null;
}

export interface CreateMyBerthProfileVariables {
  input: CreateMyBerthProfileMutationInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMyProfileMutationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateMyProfile {
  __typename: "UpdateMyProfileMutationPayload";
  clientMutationId: string | null;
}

export interface UpdateProfile {
  updateMyProfile: UpdateProfile_updateMyProfile | null;
}

export interface UpdateProfileVariables {
  input: UpdateMyProfileMutationInput;
}

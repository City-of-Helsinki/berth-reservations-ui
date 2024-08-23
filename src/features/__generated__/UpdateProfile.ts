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
  /**
   * Updates the profile which is linked to the currently authenticated user based on the given data.
   * 
   * One or several of the following is possible to add, modify or remove:
   * 
   * * Email
   * * Address
   * * Phone
   * 
   * Requires authentication.
   * 
   * Possible error codes:
   * 
   * * `PROFILE_MUST_HAVE_PRIMARY_EMAIL`: If trying to get rid of the profile's primary email.
   * * `DATA_CONFLICT_ERROR`: Could not update with the provided data because it would cause a conflict.
   */
  updateMyProfile: UpdateProfile_updateMyProfile | null;
}

export interface UpdateProfileVariables {
  input: UpdateMyProfileMutationInput;
}

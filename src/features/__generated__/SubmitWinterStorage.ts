/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWinterStorageApplicationMutationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitWinterStorage
// ====================================================

export interface SubmitWinterStorage_createWinterStorageApplication_winterStorageApplication {
  __typename: "WinterStorageApplicationNode";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface SubmitWinterStorage_createWinterStorageApplication {
  __typename: "CreateWinterStorageApplicationMutationPayload";
  winterStorageApplication: SubmitWinterStorage_createWinterStorageApplication_winterStorageApplication | null;
}

export interface SubmitWinterStorage {
  createWinterStorageApplication: SubmitWinterStorage_createWinterStorageApplication | null;
}

export interface SubmitWinterStorageVariables {
  input: CreateWinterStorageApplicationMutationInput;
}

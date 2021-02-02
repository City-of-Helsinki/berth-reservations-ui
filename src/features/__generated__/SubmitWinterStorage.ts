/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WinterStorageApplicationInput } from "../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitWinterStorage
// ====================================================

export interface SubmitWinterStorage_createWinterStorageApplication {
  __typename: "CreateWinterStorageApplication";
  ok: boolean | null;
}

export interface SubmitWinterStorage {
  createWinterStorageApplication: SubmitWinterStorage_createWinterStorageApplication | null;
}

export interface SubmitWinterStorageVariables {
  application: WinterStorageApplicationInput;
}

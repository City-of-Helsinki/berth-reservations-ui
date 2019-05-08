/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WinterStorageReservationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitWinterStorage
// ====================================================

export interface SubmitWinterStorage_createWinterStorageReservation {
  __typename: "CreateWinterStorageReservation";
  ok: boolean | null;
}

export interface SubmitWinterStorage {
  createWinterStorageReservation: SubmitWinterStorage_createWinterStorageReservation | null;
}

export interface SubmitWinterStorageVariables {
  reservation: WinterStorageReservationInput;
}

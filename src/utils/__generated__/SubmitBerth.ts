/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BerthReservationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitBerth
// ====================================================

export interface SubmitBerth_createBerthReservation {
  __typename: "CreateBerthReservation";
  ok: boolean | null;
}

export interface SubmitBerth {
  createBerthReservation: SubmitBerth_createBerthReservation | null;
}

export interface SubmitBerthVariables {
  reservation: BerthReservationInput;
}

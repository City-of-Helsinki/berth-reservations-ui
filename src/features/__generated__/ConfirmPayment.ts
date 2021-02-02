/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfirmPaymentMutationInput } from "../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ConfirmPayment
// ====================================================

export interface ConfirmPayment_confirmPayment {
  __typename: "ConfirmPaymentMutationPayload";
  url: string | null;
}

export interface ConfirmPayment {
  confirmPayment: ConfirmPayment_confirmPayment | null;
}

export interface ConfirmPaymentVariables {
  confirmPaymentMutationInput: ConfirmPaymentMutationInput;
}

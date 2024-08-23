/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CancelOrderMutationInput } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CancelOrder
// ====================================================

export interface CancelOrder_cancelOrder {
  __typename: 'CancelOrderMutationPayload';
}

export interface CancelOrder {
  cancelOrder: CancelOrder_cancelOrder | null;
}

export interface CancelOrderVariables {
  cancelOrderMutationInput: CancelOrderMutationInput;
}

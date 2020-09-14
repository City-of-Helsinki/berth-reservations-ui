/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: OrderDetails
// ====================================================

export interface OrderDetails_orderDetails {
  __typename: "OrderDetailsType";
  status: OrderStatus;
}

export interface OrderDetails {
  orderDetails: OrderDetails_orderDetails | null;
}

export interface OrderDetailsVariables {
  orderNumber: string;
}

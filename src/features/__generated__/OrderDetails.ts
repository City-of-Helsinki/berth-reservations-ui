/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderTypeEnum, OrderStatus } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: OrderDetails
// ====================================================

export interface OrderDetails_orderDetails {
  __typename: "OrderDetailsType";
  orderType: OrderTypeEnum;
  status: OrderStatus;
  harbor: string;
  pier: string;
  berth: string;
  isApplicationOrder: boolean;
}

export interface OrderDetails_contractSigned {
  __typename: "ContractSignedType";
  isSigned: boolean | null;
}

export interface OrderDetails_contractAuthMethods {
  __typename: "AuthMethod";
  identifier: string;
  name: string;
  image: string;
}

export interface OrderDetails {
  orderDetails: OrderDetails_orderDetails | null;
  contractSigned: OrderDetails_contractSigned | null;
  contractAuthMethods: OrderDetails_contractAuthMethods[];
}

export interface OrderDetailsVariables {
  orderNumber: string;
}

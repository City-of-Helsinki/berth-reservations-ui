/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HarborNameQuery
// ====================================================

export interface HarborNameQuery_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface HarborNameQuery_harbor {
  __typename: "HarborNode";
  properties: HarborNameQuery_harbor_properties | null;
}

export interface HarborNameQuery {
  harbor: HarborNameQuery_harbor | null;
}

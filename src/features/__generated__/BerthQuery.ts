/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BerthQuery
// ====================================================

export interface BerthQuery_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface BerthQuery_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: BerthQuery_berth_pier_properties_harbor_properties | null;
}

export interface BerthQuery_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: BerthQuery_berth_pier_properties_harbor;
}

export interface BerthQuery_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: BerthQuery_berth_pier_properties | null;
}

export interface BerthQuery_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: BerthQuery_berth_pier;
}

export interface BerthQuery {
  berth: BerthQuery_berth | null;
}

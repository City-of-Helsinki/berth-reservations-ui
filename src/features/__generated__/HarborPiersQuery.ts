/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HarborPiersQuery
// ====================================================

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges_node {
  __typename: 'BerthNode';
  id: string;
  number: string;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges {
  __typename: 'BerthNodeEdge';
  node: HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges_node | null;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths {
  __typename: 'BerthNodeConnection';
  edges: (HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges | null)[];
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties {
  __typename: 'PierProperties';
  identifier: string;
  berths: HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node {
  __typename: 'PierNode';
  id: string;
  properties: HarborPiersQuery_harbor_properties_piers_edges_node_properties | null;
}

export interface HarborPiersQuery_harbor_properties_piers_edges {
  __typename: 'PierNodeEdge';
  node: HarborPiersQuery_harbor_properties_piers_edges_node | null;
}

export interface HarborPiersQuery_harbor_properties_piers {
  __typename: 'PierNodeConnection';
  edges: (HarborPiersQuery_harbor_properties_piers_edges | null)[];
}

export interface HarborPiersQuery_harbor_properties {
  __typename: 'HarborProperties';
  piers: HarborPiersQuery_harbor_properties_piers | null;
}

export interface HarborPiersQuery_harbor {
  __typename: 'HarborNode';
  properties: HarborPiersQuery_harbor_properties | null;
}

export interface HarborPiersQuery {
  harbor: HarborPiersQuery_harbor | null;
}

export interface HarborPiersQueryVariables {
  id: string;
}

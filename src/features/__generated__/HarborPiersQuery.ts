/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HarborPiersQuery
// ====================================================

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  /**
   * The ID of the object.
   */
  id: string;
  number: string;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges_node | null;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths_edges | null)[];
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  /**
   * Laiturin/osa-alueen tunnus
   */
  identifier: string;
  berths: HarborPiersQuery_harbor_properties_piers_edges_node_properties_berths;
}

export interface HarborPiersQuery_harbor_properties_piers_edges_node {
  __typename: "PierNode";
  /**
   * The ID of the object.
   */
  id: string;
  properties: HarborPiersQuery_harbor_properties_piers_edges_node_properties | null;
}

export interface HarborPiersQuery_harbor_properties_piers_edges {
  __typename: "PierNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: HarborPiersQuery_harbor_properties_piers_edges_node | null;
}

export interface HarborPiersQuery_harbor_properties_piers {
  __typename: "PierNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (HarborPiersQuery_harbor_properties_piers_edges | null)[];
}

export interface HarborPiersQuery_harbor_properties {
  __typename: "HarborProperties";
  /**
   * To filter the piers suitable for an application, you can use the `forApplication` argument. 
   * 
   * **Requires permissions** to access applications.
   * 
   * Errors:
   * * Filter `forApplication` with a user without enough permissions
   *  * Filter `forApplication` combined with either dimension (width, length) filter
   */
  piers: HarborPiersQuery_harbor_properties_piers | null;
}

export interface HarborPiersQuery_harbor {
  __typename: "HarborNode";
  properties: HarborPiersQuery_harbor_properties | null;
}

export interface HarborPiersQuery {
  /**
   * The ID of the object
   */
  harbor: HarborPiersQuery_harbor | null;
}

export interface HarborPiersQueryVariables {
  id: string;
}

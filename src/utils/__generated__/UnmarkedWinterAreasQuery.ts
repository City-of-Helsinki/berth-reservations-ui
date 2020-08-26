/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UnmarkedWinterAreasQuery
// ====================================================

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  numberOfUnmarkedSpaces: number | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaType";
  /**
   * The ID of the object.
   */
  id: string;
  properties: UnmarkedWinterAreasQuery_winterStorageAreas_edges_node_properties | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges {
  __typename: "WinterStorageAreaTypeEdge";
  /**
   * The item at the end of the edge
   */
  node: UnmarkedWinterAreasQuery_winterStorageAreas_edges_node | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas {
  __typename: "WinterStorageAreaTypeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (UnmarkedWinterAreasQuery_winterStorageAreas_edges | null)[];
}

export interface UnmarkedWinterAreasQuery {
  winterStorageAreas: UnmarkedWinterAreasQuery_winterStorageAreas | null;
}

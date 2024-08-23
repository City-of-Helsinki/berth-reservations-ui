/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UnmarkedWinterAreasQuery
// ====================================================

export interface UnmarkedWinterAreasQuery_boatTypes {
  __typename: 'BoatTypeType';
  id: string;
  name: string | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges_node_properties {
  __typename: 'WinterStorageAreaProperties';
  name: string | null;
  estimatedNumberOfUnmarkedSpaces: number | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges_node {
  __typename: 'WinterStorageAreaNode';
  id: string;
  properties: UnmarkedWinterAreasQuery_winterStorageAreas_edges_node_properties | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas_edges {
  __typename: 'WinterStorageAreaNodeEdge';
  node: UnmarkedWinterAreasQuery_winterStorageAreas_edges_node | null;
}

export interface UnmarkedWinterAreasQuery_winterStorageAreas {
  __typename: 'WinterStorageAreaNodeConnection';
  edges: (UnmarkedWinterAreasQuery_winterStorageAreas_edges | null)[];
}

export interface UnmarkedWinterAreasQuery {
  boatTypes: UnmarkedWinterAreasQuery_boatTypes[] | null;
  winterStorageAreas: UnmarkedWinterAreasQuery_winterStorageAreas | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WinterAreasQuery
// ====================================================

export interface WinterAreasQuery_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node_geometry {
  __typename: "GeometryObjectType";
  coordinates: any | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  streetAddress: string | null;
  zipCode: string | null;
  imageFile: string | null;
  maxLengthOfSectionSpaces: number | null;
  numberOfSectionSpaces: number | null;
  servicemapId: string | null;
  numberOfUnmarkedSpaces: number | null;
  electricity: boolean | null;
  water: boolean | null;
  gate: boolean | null;
  repairArea: boolean | null;
  summerStorageForDockingEquipment: boolean | null;
  summerStorageForTrailers: boolean | null;
  summerStorageForBoats: boolean | null;
  municipality: string | null;
  wwwUrl: string | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaType";
  /**
   * The ID of the object.
   */
  id: string;
  geometry: WinterAreasQuery_winterStorageAreas_edges_node_geometry | null;
  properties: WinterAreasQuery_winterStorageAreas_edges_node_properties | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges {
  __typename: "WinterStorageAreaTypeEdge";
  /**
   * The item at the end of the edge
   */
  node: WinterAreasQuery_winterStorageAreas_edges_node | null;
}

export interface WinterAreasQuery_winterStorageAreas {
  __typename: "WinterStorageAreaTypeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (WinterAreasQuery_winterStorageAreas_edges | null)[];
}

export interface WinterAreasQuery {
  boatTypes: (WinterAreasQuery_boatTypes | null)[] | null;
  winterStorageAreas: WinterAreasQuery_winterStorageAreas | null;
}

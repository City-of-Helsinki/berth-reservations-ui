/* tslint:disable */
/* eslint-disable */
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

export interface WinterAreasQuery_winterStorageAreas_edges_node_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  name: string | null;
  streetAddress: string | null;
  zipCode: string;
  imageFile: string | null;
  numberOfMarkedPlaces: number | null;
  maximumWidth: number | null;
  maximumLength: number | null;
  numberOfSectionSpaces: number | null;
  maxLengthOfSectionSpaces: number | null;
  numberOfUnmarkedSpaces: number | null;
  electricity: boolean;
  water: boolean;
  gate: boolean;
  repairArea: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  summerStorageForBoats: boolean;
  municipality: string | null;
  wwwUrl: string;
  availabilityLevel: WinterAreasQuery_winterStorageAreas_edges_node_properties_availabilityLevel | null;
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
  edges: (WinterAreasQuery_winterStorageAreas_edges | null)[];
}

export interface WinterAreasQuery {
  boatTypes: (WinterAreasQuery_boatTypes | null)[] | null;
  winterStorageAreas: WinterAreasQuery_winterStorageAreas | null;
}

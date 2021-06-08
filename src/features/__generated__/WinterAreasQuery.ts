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

export interface WinterAreasQuery_winterStorageAreas_edges_node_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node_properties {
  __typename: "WinterStorageAreaProperties";
  availabilityLevel: WinterAreasQuery_winterStorageAreas_edges_node_properties_availabilityLevel | null;
  estimatedNumberOfSectionSpaces: number | null;
  estimatedNumberOfUnmarkedSpaces: number | null;
  imageFile: string | null;
  maxLength: number | null;
  maxLengthOfSectionSpaces: any | null;
  maxWidth: number | null;
  municipality: string | null;
  name: string | null;
  servicemapId: string | null;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
  electricity: boolean;
  water: boolean;
  gate: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  summerStorageForBoats: boolean;
}

export interface WinterAreasQuery_winterStorageAreas_edges_node {
  __typename: "WinterStorageAreaNode";
  id: string;
  geometry: WinterAreasQuery_winterStorageAreas_edges_node_geometry | null;
  properties: WinterAreasQuery_winterStorageAreas_edges_node_properties | null;
}

export interface WinterAreasQuery_winterStorageAreas_edges {
  __typename: "WinterStorageAreaNodeEdge";
  node: WinterAreasQuery_winterStorageAreas_edges_node | null;
}

export interface WinterAreasQuery_winterStorageAreas {
  __typename: "WinterStorageAreaNodeConnection";
  edges: (WinterAreasQuery_winterStorageAreas_edges | null)[];
}

export interface WinterAreasQuery {
  boatTypes: WinterAreasQuery_boatTypes[] | null;
  winterStorageAreas: WinterAreasQuery_winterStorageAreas | null;
}

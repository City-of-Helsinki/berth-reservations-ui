/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HarborsQuery
// ====================================================

export interface HarborsQuery_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface HarborsQuery_harbors_edges_node_geometry {
  __typename: "GeometryObjectType";
  coordinates: any | null;
}

export interface HarborsQuery_harbors_edges_node_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  id: string;
  number: string;
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  node: HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths_edges_node | null;
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  edges: (HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths_edges | null)[];
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  identifier: string;
  berths: HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths;
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties | null;
}

export interface HarborsQuery_harbors_edges_node_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: HarborsQuery_harbors_edges_node_properties_piers_edges_node | null;
}

export interface HarborsQuery_harbors_edges_node_properties_piers {
  __typename: "PierNodeConnection";
  edges: (HarborsQuery_harbors_edges_node_properties_piers_edges | null)[];
}

export interface HarborsQuery_harbors_edges_node_properties_suitableBoatTypes {
  __typename: "BoatTypeType";
  id: string;
}

export interface HarborsQuery_harbors_edges_node_properties {
  __typename: "HarborProperties";
  availabilityLevel: HarborsQuery_harbors_edges_node_properties_availabilityLevel | null;
  electricity: boolean;
  email: string;
  gate: boolean;
  imageFile: string | null;
  lighting: boolean;
  maxDepth: number | null;
  maxLength: number | null;
  maxWidth: number | null;
  mooring: boolean;
  municipality: string | null;
  name: string | null;
  numberOfPlaces: number;
  phone: string;
  piers: HarborsQuery_harbors_edges_node_properties_piers | null;
  servicemapId: string | null;
  streetAddress: string | null;
  suitableBoatTypes: (HarborsQuery_harbors_edges_node_properties_suitableBoatTypes | null)[];
  wasteCollection: boolean;
  water: boolean;
  wwwUrl: string;
  zipCode: string;
}

export interface HarborsQuery_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  geometry: HarborsQuery_harbors_edges_node_geometry | null;
  properties: HarborsQuery_harbors_edges_node_properties | null;
}

export interface HarborsQuery_harbors_edges {
  __typename: "HarborNodeEdge";
  node: HarborsQuery_harbors_edges_node | null;
}

export interface HarborsQuery_harbors {
  __typename: "HarborNodeConnection";
  edges: (HarborsQuery_harbors_edges | null)[];
}

export interface HarborsQuery {
  boatTypes: HarborsQuery_boatTypes[] | null;
  harbors: HarborsQuery_harbors | null;
}

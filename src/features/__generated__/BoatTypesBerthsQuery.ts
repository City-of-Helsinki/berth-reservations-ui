/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BoatTypesBerthsQuery
// ====================================================

export interface BoatTypesBerthsQuery_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_geometry {
  __typename: "GeometryObjectType";
  coordinates: any | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node_properties_suitableBoatTypes {
  __typename: "BoatTypeType";
  id: string;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  mooring: boolean;
  electricity: boolean;
  water: boolean;
  wasteCollection: boolean;
  gate: boolean;
  lighting: boolean;
  suitableBoatTypes: BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node_properties_suitableBoatTypes[];
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node {
  __typename: "PierNode";
  id: string;
  properties: BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node_properties | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges_node | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_piers {
  __typename: "PierNodeConnection";
  edges: (BoatTypesBerthsQuery_harbors_edges_node_properties_piers_edges | null)[];
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties {
  __typename: "HarborProperties";
  availabilityLevel: BoatTypesBerthsQuery_harbors_edges_node_properties_availabilityLevel | null;
  email: string;
  imageFile: string | null;
  maxDepth: number | null;
  maxLength: number | null;
  maxWidth: number | null;
  municipality: string | null;
  name: string | null;
  numberOfPlaces: number;
  phone: string;
  servicemapId: string | null;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
  piers: BoatTypesBerthsQuery_harbors_edges_node_properties_piers | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  geometry: BoatTypesBerthsQuery_harbors_edges_node_geometry | null;
  properties: BoatTypesBerthsQuery_harbors_edges_node_properties | null;
}

export interface BoatTypesBerthsQuery_harbors_edges {
  __typename: "HarborNodeEdge";
  node: BoatTypesBerthsQuery_harbors_edges_node | null;
}

export interface BoatTypesBerthsQuery_harbors {
  __typename: "HarborNodeConnection";
  edges: (BoatTypesBerthsQuery_harbors_edges | null)[];
}

export interface BoatTypesBerthsQuery {
  boatTypes: BoatTypesBerthsQuery_boatTypes[] | null;
  harbors: BoatTypesBerthsQuery_harbors | null;
}

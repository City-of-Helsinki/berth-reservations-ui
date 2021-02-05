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

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_suitableBoatTypes {
  __typename: "BoatTypeType";
  id: string;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
  servicemapId: string | null;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  phone: string;
  email: string;
  wwwUrl: string;
  imageFile: string | null;
  mooring: boolean;
  electricity: boolean;
  water: boolean;
  wasteCollection: boolean;
  gate: boolean;
  lighting: boolean;
  suitableBoatTypes: (BoatTypesBerthsQuery_harbors_edges_node_properties_suitableBoatTypes | null)[];
  availabilityLevel: BoatTypesBerthsQuery_harbors_edges_node_properties_availabilityLevel | null;
  numberOfPlaces: number | null;
  maximumWidth: number | null;
  maximumLength: number | null;
  maximumDepth: number | null;
}

export interface BoatTypesBerthsQuery_harbors_edges_node {
  __typename: "HarborType";
  /**
   * The ID of the object.
   */
  id: string;
  geometry: BoatTypesBerthsQuery_harbors_edges_node_geometry | null;
  properties: BoatTypesBerthsQuery_harbors_edges_node_properties | null;
}

export interface BoatTypesBerthsQuery_harbors_edges {
  __typename: "HarborTypeEdge";
  /**
   * The item at the end of the edge
   */
  node: BoatTypesBerthsQuery_harbors_edges_node | null;
}

export interface BoatTypesBerthsQuery_harbors {
  __typename: "HarborTypeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (BoatTypesBerthsQuery_harbors_edges | null)[];
}

export interface BoatTypesBerthsQuery {
  boatTypes: (BoatTypesBerthsQuery_boatTypes | null)[] | null;
  harbors: BoatTypesBerthsQuery_harbors | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyBoatsQuery
// ====================================================

export interface MyBoatsQuery_myProfile_boats_edges_node_boatType {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface MyBoatsQuery_myProfile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  boatType: MyBoatsQuery_myProfile_boats_edges_node_boatType;
  name: string;
  registrationNumber: string;
  length: any;
  width: any;
  draught: any | null;
  weight: number | null;
  model: string;
}

export interface MyBoatsQuery_myProfile_boats_edges {
  __typename: "BoatNodeEdge";
  node: MyBoatsQuery_myProfile_boats_edges_node | null;
}

export interface MyBoatsQuery_myProfile_boats {
  __typename: "BoatNodeConnection";
  edges: (MyBoatsQuery_myProfile_boats_edges | null)[];
}

export interface MyBoatsQuery_myProfile {
  __typename: "ProfileNode";
  id: string;
  boats: MyBoatsQuery_myProfile_boats | null;
}

export interface MyBoatsQuery {
  myProfile: MyBoatsQuery_myProfile | null;
}

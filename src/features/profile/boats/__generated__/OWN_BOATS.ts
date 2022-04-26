/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OWN_BOATS
// ====================================================

export interface OWN_BOATS_myProfile_boats_edges_node {
  __typename: "BoatNode";
  id: string;
  name: string;
  registrationNumber: string;
}

export interface OWN_BOATS_myProfile_boats_edges {
  __typename: "BoatNodeEdge";
  node: OWN_BOATS_myProfile_boats_edges_node | null;
}

export interface OWN_BOATS_myProfile_boats {
  __typename: "BoatNodeConnection";
  edges: (OWN_BOATS_myProfile_boats_edges | null)[];
}

export interface OWN_BOATS_myProfile {
  __typename: "ProfileNode";
  id: string;
  boats: OWN_BOATS_myProfile_boats | null;
}

export interface OWN_BOATS {
  myProfile: OWN_BOATS_myProfile | null;
}

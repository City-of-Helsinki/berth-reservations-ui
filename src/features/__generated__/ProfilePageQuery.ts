/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ProfilePageQuery
// ====================================================

export interface ProfilePageQuery_myProfile_primaryAddress {
  __typename: "AddressNode";
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface ProfilePageQuery_myProfile_primaryEmail {
  __typename: "EmailNode";
  id: string;
  email: string;
}

export interface ProfilePageQuery_myProfile_primaryPhone {
  __typename: "PhoneNode";
  id: string;
  phone: string;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties_harbor_properties | null;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties_harbor;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier_properties | null;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: ProfilePageQuery_myProfile_berthLeases_edges_node_berth_pier;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges_node {
  __typename: "BerthLeaseNode";
  id: string;
  berth: ProfilePageQuery_myProfile_berthLeases_edges_node_berth;
}

export interface ProfilePageQuery_myProfile_berthLeases_edges {
  __typename: "BerthLeaseNodeEdge";
  node: ProfilePageQuery_myProfile_berthLeases_edges_node | null;
}

export interface ProfilePageQuery_myProfile_berthLeases {
  __typename: "BerthLeaseNodeConnection";
  edges: (ProfilePageQuery_myProfile_berthLeases_edges | null)[];
}

export interface ProfilePageQuery_myProfile {
  __typename: "ProfileNode";
  id: string;
  language: Language | null;
  firstName: string;
  lastName: string;
  primaryAddress: ProfilePageQuery_myProfile_primaryAddress | null;
  primaryEmail: ProfilePageQuery_myProfile_primaryEmail | null;
  primaryPhone: ProfilePageQuery_myProfile_primaryPhone | null;
  berthLeases: ProfilePageQuery_myProfile_berthLeases | null;
}

export interface ProfilePageQuery {
  myProfile: ProfilePageQuery_myProfile | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: berthApplicationNodeFragment
// ====================================================

export interface berthApplicationNodeFragment_harborChoices_harbor_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
}

export interface berthApplicationNodeFragment_harborChoices_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  availabilityLevel: berthApplicationNodeFragment_harborChoices_harbor_properties_availabilityLevel | null;
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  water: boolean;
}

export interface berthApplicationNodeFragment_harborChoices_harbor {
  __typename: "HarborNode";
  id: string;
  properties: berthApplicationNodeFragment_harborChoices_harbor_properties | null;
}

export interface berthApplicationNodeFragment_harborChoices {
  __typename: "HarborChoiceType";
  harbor: berthApplicationNodeFragment_harborChoices_harbor;
}

export interface berthApplicationNodeFragment {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
  harborChoices: (berthApplicationNodeFragment_harborChoices | null)[] | null;
}

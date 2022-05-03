/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ApplicationStatus } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: berthApplicationNodeFragment
// ====================================================

export interface berthApplicationNodeFragment_harborChoices_harbor_properties_availabilityLevel {
  __typename: "AvailabilityLevelType";
  id: string;
  title: string | null;
  description: string | null;
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
  priority: number;
  harbor: berthApplicationNodeFragment_harborChoices_harbor;
}

export interface berthApplicationNodeFragment_boat {
  __typename: "BoatNode";
  id: string;
  name: string;
  registrationNumber: string;
}

export interface berthApplicationNodeFragment {
  __typename: "BerthApplicationNode";
  id: string;
  createdAt: any;
  status: ApplicationStatus;
  harborChoices: (berthApplicationNodeFragment_harborChoices | null)[] | null;
  boat: berthApplicationNodeFragment_boat | null;
}

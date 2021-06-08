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
  phone: string | null;
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
}

export interface ProfilePageQuery {
  myProfile: ProfilePageQuery_myProfile | null;
}

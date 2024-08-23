/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: ProfilePageQuery
// ====================================================

export interface ProfilePageQuery_myProfile_primaryAddress {
  __typename: 'AddressNode';
  /**
   * The ID of the object
   */
  id: string;
  address: string;
  postalCode: string;
  city: string;
}

export interface ProfilePageQuery_myProfile_primaryEmail {
  __typename: 'EmailNode';
  /**
   * The ID of the object
   */
  id: string;
  email: string;
}

export interface ProfilePageQuery_myProfile_primaryPhone {
  __typename: 'PhoneNode';
  /**
   * The ID of the object
   */
  id: string;
  phone: string;
}

export interface ProfilePageQuery_myProfile {
  __typename: 'ProfileNode';
  /**
   * The ID of the object
   */
  id: string;
  language: Language | null;
  firstName: string;
  lastName: string;
  /**
   * Convenience field for the address which is marked as primary.
   */
  primaryAddress: ProfilePageQuery_myProfile_primaryAddress | null;
  /**
   * Convenience field for the email which is marked as primary.
   */
  primaryEmail: ProfilePageQuery_myProfile_primaryEmail | null;
  /**
   * Convenience field for the phone which is marked as primary.
   */
  primaryPhone: ProfilePageQuery_myProfile_primaryPhone | null;
}

export interface ProfilePageQuery {
  /**
   * Get the profile belonging to the currently authenticated user.
   *
   * Requires authentication.
   */
  myProfile: ProfilePageQuery_myProfile | null;
}

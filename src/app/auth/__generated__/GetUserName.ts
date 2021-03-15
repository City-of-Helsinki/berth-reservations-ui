/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserName
// ====================================================

export interface GetUserName_currentUser {
  __typename: "CurrentUser";
  id: string;
  name: string | null;
  email: string | null;
}

export interface GetUserName {
  currentUser: GetUserName_currentUser | null;
}

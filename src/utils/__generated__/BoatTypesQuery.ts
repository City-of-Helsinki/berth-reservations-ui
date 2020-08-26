/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BoatTypesQuery
// ====================================================

export interface BoatTypesQuery_boatTypes {
  __typename: "BoatTypeType";
  id: string;
  name: string | null;
}

export interface BoatTypesQuery {
  boatTypes: (BoatTypesQuery_boatTypes | null)[] | null;
}

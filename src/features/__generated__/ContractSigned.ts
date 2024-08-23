/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContractSigned
// ====================================================

export interface ContractSigned_contractSigned {
  __typename: 'ContractSignedType';
  isSigned: boolean;
}

export interface ContractSigned {
  contractSigned: ContractSigned_contractSigned | null;
}

export interface ContractSignedVariables {
  orderNumber: string;
}

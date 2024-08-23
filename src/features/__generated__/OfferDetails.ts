/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferStatus } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: OfferDetails
// ====================================================

export interface OfferDetails_offerDetails {
  __typename: 'OfferDetailsType';
  status: OfferStatus;
  harbor: string;
  pier: string;
  berth: string;
}

export interface OfferDetails {
  offerDetails: OfferDetails_offerDetails | null;
}

export interface OfferDetailsVariables {
  offerNumber: string;
}

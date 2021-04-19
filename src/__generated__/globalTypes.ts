/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum OrderStatus {
  CANCELLED = "CANCELLED",
  DRAFTED = "DRAFTED",
  ERROR = "ERROR",
  EXPIRED = "EXPIRED",
  OFFERED = "OFFERED",
  PAID = "PAID",
  PAID_MANUALLY = "PAID_MANUALLY",
  REFUNDED = "REFUNDED",
  REJECTED = "REJECTED",
}

/**
 * An enumeration.
 */
export enum OrderTypeEnum {
  ADDITIONAL_PRODUCT = "ADDITIONAL_PRODUCT",
  BERTH = "BERTH",
  UNKNOWN = "UNKNOWN",
  WINTER_STORAGE = "WINTER_STORAGE",
}

/**
 * An enumeration.
 */
export enum WinterStorageMethod {
  ON_TRAILER = "ON_TRAILER",
  ON_TRESTLES = "ON_TRESTLES",
  UNDER_TARP = "UNDER_TARP",
}

export interface AcceptBerthSwitchOfferMutationInput {
  offerNumber: string;
  isAccepted: boolean;
  clientMutationId?: string | null;
}

export interface BerthApplicationInput {
  language: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
  companyName?: string | null;
  businessId?: string | null;
  boatType: string;
  boatRegistrationNumber?: string | null;
  boatName?: string | null;
  boatModel?: string | null;
  boatLength: number;
  boatWidth: number;
  applicationCode?: string | null;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
  informationAccuracyConfirmed: boolean;
  boatDraught?: number | null;
  boatWeight?: number | null;
  accessibilityRequired?: boolean | null;
  boatPropulsion?: string | null;
  boatHullMaterial?: string | null;
  boatIntendedUse?: string | null;
  rentingPeriod?: string | null;
  rentFrom?: string | null;
  rentTill?: string | null;
  boatIsInspected?: boolean | null;
  boatIsInsured?: boolean | null;
  agreeToTerms?: boolean | null;
  choices: HarborChoiceInput[];
}

export interface BerthSwitchInput {
  harborId: string;
  pier?: string | null;
  berthNumber: string;
  reason?: string | null;
}

export interface CancelOrderMutationInput {
  orderNumber: string;
  clientMutationId?: string | null;
}

export interface ConfirmPaymentMutationInput {
  orderNumber: string;
  clientMutationId?: string | null;
}

export interface FulfillContractMutationInput {
  orderNumber: string;
  returnUrl: string;
  authService: string;
  clientMutationId?: string | null;
}

export interface HarborChoiceInput {
  harborId: string;
  priority: number;
}

export interface WinterStorageApplicationInput {
  language: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
  companyName?: string | null;
  businessId?: string | null;
  boatType: string;
  boatRegistrationNumber?: string | null;
  boatName?: string | null;
  boatModel?: string | null;
  boatLength: number;
  boatWidth: number;
  applicationCode?: string | null;
  acceptBoatingNewsletter: boolean;
  acceptFitnessNews: boolean;
  acceptLibraryNews: boolean;
  acceptOtherCultureNews: boolean;
  informationAccuracyConfirmed: boolean;
  storageMethod: WinterStorageMethod;
  trailerRegistrationNumber?: string | null;
  chosenAreas: WinterStorageAreaChoiceInput[];
}

export interface WinterStorageAreaChoiceInput {
  winterAreaId: string;
  priority: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AddressType {
  HOME = "HOME",
  NONE = "NONE",
  OTHER = "OTHER",
  WORK = "WORK",
}

export enum ApplicationStatus {
  EXPIRED = "EXPIRED",
  HANDLED = "HANDLED",
  NO_SUITABLE_BERTHS = "NO_SUITABLE_BERTHS",
  OFFER_GENERATED = "OFFER_GENERATED",
  OFFER_SENT = "OFFER_SENT",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum ContactMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum EmailType {
  NONE = "NONE",
  OTHER = "OTHER",
  PERSONAL = "PERSONAL",
  WORK = "WORK",
}

export enum Language {
  ENGLISH = "ENGLISH",
  FINNISH = "FINNISH",
  SWEDISH = "SWEDISH",
}

export enum OfferStatus {
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
  DRAFTED = "DRAFTED",
  EXPIRED = "EXPIRED",
  OFFERED = "OFFERED",
  REJECTED = "REJECTED",
}

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

export enum OrderTypeEnum {
  ADDITIONAL_PRODUCT = "ADDITIONAL_PRODUCT",
  BERTH = "BERTH",
  UNKNOWN = "UNKNOWN",
  WINTER_STORAGE = "WINTER_STORAGE",
}

export enum PhoneType {
  HOME = "HOME",
  MOBILE = "MOBILE",
  NONE = "NONE",
  OTHER = "OTHER",
  WORK = "WORK",
}

export enum ServiceType {
  BERTH = "BERTH",
  GODCHILDREN_OF_CULTURE = "GODCHILDREN_OF_CULTURE",
  HKI_MY_DATA = "HKI_MY_DATA",
  YOUTH_MEMBERSHIP = "YOUTH_MEMBERSHIP",
}

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

export interface AddServiceConnectionMutationInput {
  serviceConnection: ServiceConnectionInput;
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
  boatId?: string | null;
  boatType?: string | null;
  boatRegistrationNumber?: string | null;
  boatName?: string | null;
  boatModel?: string | null;
  boatLength?: any | null;
  boatWidth?: any | null;
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
  berthId: string;
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

export interface CreateAddressInput {
  countryCode?: string | null;
  primary?: boolean | null;
  address: string;
  postalCode: string;
  city: string;
  addressType: AddressType;
}

export interface CreateBerthApplicationMutationInput {
  berthApplication: BerthApplicationInput;
  berthSwitch?: BerthSwitchInput | null;
  clientMutationId?: string | null;
}

export interface CreateEmailInput {
  primary?: boolean | null;
  email: string;
  emailType: EmailType;
}

export interface CreateMyBerthProfileMutationInput {
  profileToken: string;
  clientMutationId?: string | null;
}

export interface CreatePhoneInput {
  primary?: boolean | null;
  phone: string;
  phoneType: PhoneType;
}

export interface CreateWinterStorageApplicationMutationInput {
  winterStorageApplication: WinterStorageApplicationInput;
  clientMutationId?: string | null;
}

export interface DeleteBerthApplicationMutationInput {
  id: string;
  clientMutationId?: string | null;
}

export interface ExtendBerthApplicationMutationInput {
  id: string;
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

export interface ProfileInput {
  firstName?: string | null;
  lastName?: string | null;
  nickname?: string | null;
  image?: string | null;
  language?: Language | null;
  contactMethod?: ContactMethod | null;
  addEmails?: (CreateEmailInput | null)[] | null;
  addPhones?: (CreatePhoneInput | null)[] | null;
  addAddresses?: (CreateAddressInput | null)[] | null;
  subscriptions?: (SubscriptionInputType | null)[] | null;
  sensitivedata?: SensitiveDataFields | null;
  updateEmails?: (UpdateEmailInput | null)[] | null;
  removeEmails?: (string | null)[] | null;
  updatePhones?: (UpdatePhoneInput | null)[] | null;
  removePhones?: (string | null)[] | null;
  updateAddresses?: (UpdateAddressInput | null)[] | null;
  removeAddresses?: (string | null)[] | null;
}

export interface SensitiveDataFields {
  ssn?: string | null;
}

export interface ServiceConnectionInput {
  service?: ServiceInput | null;
  enabled?: boolean | null;
}

export interface ServiceInput {
  type?: ServiceType | null;
}

export interface SubscriptionInputType {
  subscriptionTypeId: string;
  enabled: boolean;
}

export interface UpdateAddressInput {
  countryCode?: string | null;
  primary?: boolean | null;
  id: string;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  addressType?: AddressType | null;
}

export interface UpdateEmailInput {
  primary?: boolean | null;
  id: string;
  email?: string | null;
  emailType?: EmailType | null;
}

export interface UpdateMyProfileMutationInput {
  profile: ProfileInput;
  clientMutationId?: string | null;
}

export interface UpdatePhoneInput {
  primary?: boolean | null;
  id: string;
  phone?: string | null;
  phoneType?: PhoneType | null;
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
  boatId?: string | null;
  boatType?: string | null;
  boatRegistrationNumber?: string | null;
  boatName?: string | null;
  boatModel?: string | null;
  boatLength?: any | null;
  boatWidth?: any | null;
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

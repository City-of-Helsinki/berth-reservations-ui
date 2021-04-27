/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SwitchOfferBerthDetails
// ====================================================

export interface SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
}

export interface SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties_harbor {
  __typename: "HarborNode";
  id: string;
  properties: SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties_harbor_properties | null;
}

export interface SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties {
  __typename: "PierProperties";
  identifier: string;
  harbor: SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties_harbor;
}

export interface SwitchOfferBerthDetails_berthSwitchOffer_berth_pier {
  __typename: "PierNode";
  id: string;
  properties: SwitchOfferBerthDetails_berthSwitchOffer_berth_pier_properties | null;
}

export interface SwitchOfferBerthDetails_berthSwitchOffer_berth {
  __typename: "BerthNode";
  id: string;
  number: string;
  pier: SwitchOfferBerthDetails_berthSwitchOffer_berth_pier;
}

export interface SwitchOfferBerthDetails_berthSwitchOffer {
  __typename: "BerthSwitchOfferNode";
  id: string;
  offerNumber: string;
  berth: SwitchOfferBerthDetails_berthSwitchOffer_berth;
}

export interface SwitchOfferBerthDetails {
  berthSwitchOffer: SwitchOfferBerthDetails_berthSwitchOffer | null;
}

export interface SwitchOfferBerthDetailsVariables {
  offerNumber: string;
}

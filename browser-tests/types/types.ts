export type Choices = {
  choice1: string;
  choice2: string;
};

export type UnmarkedWinterStorageChoice = {
  winterStorageArea: string;
  winterStorageAreaIndex: number;
};

type BoatInformation = {
  boatLength: string;
  boatModel: string;
  boatName: string;
  boatRegistrationNumber: string;
  boatType: string;
  boatTypeIndex: string;
  boatWidth: string;
};

export type BerthBoatInformation = BoatInformation & {
  boatDraught: string;
  boatWeight: string;
};

export type WsBoatInformation = BoatInformation & {
  trailerRegistrationNumber: string;
};

export type ApplicantInformation = {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  municipality: string;
  phoneNumber: string;
  emailAddress: string;
};

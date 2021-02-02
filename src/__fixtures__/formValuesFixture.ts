// import { Record } from 'immutable';

import { WinterStorageMethod } from '../__generated__/globalTypes';
import { BerthFormValues } from '../features/berthApplication/types';
import { UnmarkedWinterFormValues } from '../features/unmarkedWinterStorageApplication/types';
import { WinterFormValues } from '../features/winterStorageApplication/types';

export const berthValues = {
  language: 'fi',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipCode: '',
  municipality: '',
  boatType: '',
  boatLength: '',
  boatWeight: '',
  boatDraught: '',
  boatWidth: '',
  acceptBoatingNewsletter: false,
  acceptFitnessNews: false,
  acceptLibraryNews: false,
  acceptOtherCultureNews: false,
  informationAccuracyConfirmed: false,
  choices: [],
};

export const winterValues = {
  language: 'fi',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipCode: '',
  municipality: '',
  boatType: '',
  boatLength: '',
  boatWidth: '',
  acceptBoatingNewsletter: false,
  acceptFitnessNews: false,
  acceptLibraryNews: false,
  acceptOtherCultureNews: false,
  informationAccuracyConfirmed: false,
  storageMethod: WinterStorageMethod.ON_TRESTLES,
  chosenAreas: [],
  boatStoredOnTrailer: false,
};

export const unmarkedWinterValues: UnmarkedWinterFormValues = {
  language: 'fi',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipCode: '',
  municipality: '',
  boatType: '',
  boatLength: '',
  boatWidth: '',
  acceptBoatingNewsletter: false,
  acceptFitnessNews: false,
  acceptLibraryNews: false,
  acceptOtherCultureNews: false,
  informationAccuracyConfirmed: false,
  storageMethod: WinterStorageMethod.ON_TRESTLES,
  chosenAreas: '',
};

export const createBerthValues = (values: Partial<BerthFormValues>): BerthFormValues => ({
  ...berthValues,
  ...values,
});

export const createWinterValues = (values: Partial<BerthFormValues>): WinterFormValues => ({
  ...winterValues,
  ...values,
});

export const createUnmarkedWinterValues = (values: Partial<UnmarkedWinterFormValues>): UnmarkedWinterFormValues => ({
  ...unmarkedWinterValues,
  ...values,
});

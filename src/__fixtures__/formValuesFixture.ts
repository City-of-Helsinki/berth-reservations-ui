// import { Record } from 'immutable';

import { WinterStorageMethod } from '../__generated__/globalTypes';
// import { BerthFormValues } from '../../types/berth';
// import { WinterFormValues } from '../../types/winterStorage';
// import { FormsFactory } from '../types';

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
  choices: []
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
  boatStoredOnTrailer: false
};

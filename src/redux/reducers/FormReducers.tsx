import { Record } from 'immutable';

import { WinterStorageMethod } from '../../__generated__/globalTypes';
import { BerthFormValues } from '../../types/berth';
import { WinterFormValues } from '../../types/winterStorage';
import { Action, FormsFactory, FormsState } from '../types';

const berthValues: BerthFormValues = {
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

const winterValues: WinterFormValues = {
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

const defaultState: FormsFactory = Record({
  berthValues,
  winterValues,
});

export default (state: FormsState = defaultState(), action: Action): FormsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_BERTH_FORM':
      return state.set('berthValues', payload);
    case 'SUBMIT_WINTER_FORM':
      return state.set('winterValues', payload);
    case 'RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};

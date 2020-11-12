import { screen, within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

export const areaSelectionSelectors = {
  winterStorageAreaSelect: screen.getByRole('combobox', { name: /talvisäilytysalue/i }),
  continueButton: screen.getByRole('button', { name: /jatka/i }),
};

export const boatInformationSelectors = {
  boatLength: screen.getByRole('textbox', { name: /veneen pituus, m/i }),
  boatModel: screen.getByRole('textbox', { name: /merkki/i }),
  boatName: screen.getByRole('textbox', { name: /nimi/i }),
  boatRegistrationNumber: screen.getByRole('textbox', { name: 'Rekisterinumero' }),
  boatStoredOnTrailer: screen.getByRole('radio', { name: /säilytän veneen trailerilla/i }),
  boatTypeSelect: screen.getByRole('combobox', { name: /veneen tyyppi/i }),
  boatWidth: screen.getByRole('textbox', { name: /veneen leveys, m/i }),
  heading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /veneen tiedot/i,
  }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
  trailerRegistrationNumber: screen.getByRole('textbox', { name: /trailerin rekisterinumero/i }),
};

export const unmarkedWinterStorageSelectors = {
  ownerInformationHeading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /omistajan tiedot/i,
  }),
  confirmationHeading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /tarkista ilmoitus/i,
  }),
  title: Selector('h1[class="vene-hero__title"]'),
};

import { screen, within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const selectAreas = {
  boatWidth: screen.getByRole('textbox', { name: /veneen leveys, m/i }),
  boatLength: screen.getByRole('textbox', { name: /veneen pituus, m/i }),
  boatStoredOnTrailer: screen.getByRole('checkbox', { name: /vene säilytetään trailerilla/i }),
  electricity: screen.getByRole('button', { name: /sähkö/i }),
  harborListTab: screen.getByRole('tab', { name: /lista/i }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
  getSelectButtonForArea: (name: string) => {
    const re = new RegExp(name, 'i');
    const heading = screen.getByRole('heading', { name: re });
    return within(heading.parent(0)).getByRole('button', {
      name: /lisää valittuihin/i,
    });
  },
};

const boatInformation = {
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

export const winterStorage = {
  selectAreas,
  boatInformation,
  title: Selector('h1[class="vene-hero__title"]'),
};

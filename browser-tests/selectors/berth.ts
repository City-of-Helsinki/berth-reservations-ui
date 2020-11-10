import { screen, within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const selectHarbors = {
  newApplicationRadio: screen.getByRole('radio', {
    name: /uusi hakemus hakijalla ei ole vielä helsingin kaupungin tarjoamaa venepaikkaa/i,
  }),
  boatTypeSelect: screen.getByRole('combobox', { name: /veneen tyyppi/i }),
  boatWidth: screen.getByRole('textbox', { name: /veneen leveys, m/i }),
  boatLength: screen.getByRole('textbox', { name: /veneen pituus, m/i }),
  wasteCollection: screen.getByRole('switch', { name: /jätehuolto/i }),
  harborListTab: screen.getByRole('tab', { name: /lista/i }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
  getSelectButtonForHarbor: (name: string) => {
    const re = new RegExp(name, 'i');
    const heading = screen.getByRole('heading', { name: re });
    return within(heading.parent(0)).getByRole('button', {
      name: /lisää valittuihin/i,
    });
  },
};

const boatInformation = {
  heading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /veneen tiedot/i,
  }),
  registeredBoat: screen.getByText(/rekisteröity vene/i),
  boatRegistrationNumber: screen.getByRole('textbox', { name: /rekisterinumero/i }),
  boatTypeSelect: screen.getByRole('combobox', { name: /veneen tyyppi/i }),
  boatWidth: screen.getByRole('textbox', { name: /veneen leveys, m/i }),
  boatLength: screen.getByRole('textbox', { name: /veneen pituus, m/i }),
  boatDraught: screen.getByRole('textbox', { name: /veneen syväys, m/i }),
  boatWeight: screen.getByRole('textbox', { name: /veneen paino, kg/i }),
  boatName: screen.getByRole('textbox', { name: /nimi/i }),
  boatModel: screen.getByRole('textbox', { name: /merkki/i }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
};

export const berth = {
  selectHarbors,
  boatInformation,
  title: Selector('h1[class="vene-hero__title"]'),
  legend: Selector('div[class="vene-berths-legend"]'),
};

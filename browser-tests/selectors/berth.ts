import { screen, within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';
import { escapeRegExp } from 'lodash';

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

const yourSelection = {
  heading: screen.getByRole('heading', {
    name: /omat valinnat/i,
  }),
  nextButton: screen.getByRole('button', { name: /jatka/i }),
  getHarborHeading: (text: string) => {
    const re = new RegExp(text, 'i');
    return screen.getByText(re);
  },
  getUpButtonForHeading: (heading: Selector) => {
    const row = heading.parent(2);
    return within(row).getByRole('button', { name: /siirrä ylös/i });
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

const applicantInformation = {
  heading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /hakijan tiedot/i,
  }),
  firstName: screen.getByRole('textbox', { name: /etunimi/i }),
  lastName: screen.getByRole('textbox', { name: /sukunimi/i }),
  address: screen.getByRole('textbox', { name: /jakeluosoite/i }),
  postalCode: screen.getByRole('textbox', { name: /postinumero/i }),
  municipalitySelect: screen.getByRole('combobox', { name: /postitoimipaikka/i }),
  phoneNumber: screen.getByRole('textbox', { name: /matkapuhelin/i }),
  emailAddress: screen.getByRole('textbox', { name: /sähköpostiosoite/i }),
  nextButton: screen.getByRole('button', { name: /seuraava/i }),
};

const overview = {
  heading: within(Selector('div[class="vene-form-legend"]')).getByRole('heading', {
    name: /yhteenveto/i,
  }),
  overviewInfo: Selector('div[class="vene-overview-info container"]'),
  getLabelValuePairs: async () => {
    const labelValuePairs = overview.overviewInfo.find('div[class="vene-label-value-pair"]');
    const labelValuePairCount = await labelValuePairs.count;

    const pairs: string[] = [];
    for (let i = 0; i < labelValuePairCount; i += 1) {
      const label = await labelValuePairs.nth(i).child(0).textContent;
      // Skipping index 1 because it is just ':'
      const value = await labelValuePairs.nth(i).child(2).textContent;
      pairs.push(`${label}: ${value}`);
    }
    return pairs.join('\n');
  },
  textInOverview: (text: string) => {
    return within(overview.overviewInfo).getByText(new RegExp(escapeRegExp(text)));
  },
};

export const berth = {
  selectHarbors,
  yourSelection,
  boatInformation,
  applicantInformation,
  overview,
  title: Selector('h1[class="vene-hero__title"]'),
  legend: Selector('div[class="vene-berths-legend"]'),
};

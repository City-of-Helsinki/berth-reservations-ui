import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const element = Selector('div[class="vene-footer"]');

export const footerSelectors = {
  serviceLink: within(element).getByText('Venepaikat'),
  browseBerths: within(element).getByText('Selaa venesatamia'),
  boatingInformation: within(element).getByText('Veneilytietoa'),
  recent: within(element).getByText('Ajankohtaista'),
  privacyPolicy: within(element).getByText('Rekisteriseloste'),
  accessibilityPolicy: within(element).getByText('Saavutettavuusseloste'),
  sendFeedback: within(element).getByText('Lähetä palautetta'),
  contact: within(element).getByText('Ota yhteyttä'),
};

import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const element = Selector('div[class="vene-navbar"]');
const languageSelect = element.find('div[class^="vene-language-dropdown"]');

export const navbar = {
  mainLink: within(element).getByText('Venepaikat'),
  berths: within(element).getByText('Venepaikkahaku'),
  winterStorage: within(element).getByText('Talvisäilytyspaikat'),
  unmarkedWinterStorage: within(element).getByText('Nostojärjestysilmoitus'),
  languageSelect: {
    button: languageSelect.find('button'),
    Finnish: within(element).getByText('Suomeksi'),
    Swedish: within(element).getByText('På svenska'),
    English: within(element).getByText('In English'),
  },
};

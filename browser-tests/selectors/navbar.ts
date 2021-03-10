import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const element = Selector('header');

export const navbarSelectors = {
  mainLink: within(element).getByText('Venepaikat'),
  berths: within(element).getByText('Venepaikkahaku'),
  winterStorage: within(element).getByText('Talvisäilytyspaikat'),
  unmarkedWinterStorage: within(element).getByText('Nostojärjestysilmoitus'),
  languageSelect: {
    button: within(element).getByRole('button', {
      name: /site\.language\.select/i,
    }),
    Finnish: within(element).getByText('Suomeksi'),
    Swedish: within(element).getByText('På svenska'),
    English: within(element).getByText('In English'),
  },
};

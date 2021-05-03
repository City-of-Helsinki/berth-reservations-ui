import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const element = Selector('header');

export const navbarSelectors = {
  mainLink: within(element).getByRole('link', { name: 'Venepaikat' }),
  berths: within(element).getByText('Venepaikkahaku'),
  winterStorage: within(element).getByText('Talvisäilytyspaikat'),
  unmarkedWinterStorage: within(element).getByText('Nostojärjestysilmoitus'),
  languageSelect: {
    button: within(element).getByRole('button', {
      name: /site\.language\.select/i,
    }),
    Finnish: within(element).getByRole('link', { name: 'Suomeksi' }),
    Swedish: within(element).getByRole('link', { name: 'På svenska' }),
    English: within(element).getByRole('link', { name: 'In English' }),
  },
};

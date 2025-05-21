import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const content = Selector('div[class="vene-front-page container"]');

export const frontPageSelectors = {
  title: Selector('h1[class="vene-hero__title"]'),
  berths: within(content).getByText('Selaa ja hae venepaikkoja'),
};

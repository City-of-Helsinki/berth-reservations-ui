import { within } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const content = Selector('div[class="vene-front-page container"]');

const frontPage = {
  title: Selector('h1[class="vene-hero__title"]'),
  berths: within(content).getByText('Selaa ja hae venepaikkoja'),
  winterStorage: within(content).getByText('Selaa ja hae talvisäilytyspaikkoja'),
  unmarkedWinterStorage: within(content).getByText('Ilmoita'),
};
export default frontPage;

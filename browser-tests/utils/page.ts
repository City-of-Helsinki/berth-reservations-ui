import { t } from 'testcafe';

import { berthSelectors } from '../selectors/berth';
import { frontPageSelectors } from '../selectors/frontPage';
import { unmarkedWinterStorageSelectors } from '../selectors/unmarkedWinterStorage';
import { winterStorageSelectors } from '../selectors/winterStorage';

export const isFrontPage = async () => {
  await t.expect(frontPageSelectors.title.innerText).eql('Venepaikat');
};

export const isBerthsPage = async () => {
  await t.expect(berthSelectors.title.innerText).eql('Venepaikkahaku');
};

export const isWinterStoragePage = async () => {
  await t.expect(winterStorageSelectors.title.innerText).eql('Talvisäilytyspaikat');
};

export const isUnmarkedWinterStoragePage = async () => {
  await t.expect(unmarkedWinterStorageSelectors.title.innerText).eql('Nostojärjestysilmoitus');
};

import { t } from 'testcafe';
import berth from '../selectors/berth';
import frontPage from '../selectors/frontPage';
import unmarkedWinterStorage from '../selectors/unmarkedWinterStorage';
import winterStorage from '../selectors/winterStorage';

export const isFrontPage = async () => {
  await t.expect(frontPage.title.innerText).eql('Venepaikat');
};

export const isBerthsPage = async () => {
  await t.expect(berth.title.innerText).eql('Venepaikkahaku');
};

export const isWinterStoragePage = async () => {
  await t.expect(winterStorage.title.innerText).eql('Talvisäilytyspaikat');
};

export const isUnmarkedWinterStoragePage = async () => {
  await t.expect(unmarkedWinterStorage.title.innerText).eql('Nostojärjestysilmoitus');
};

import { t, ClientFunction } from 'testcafe';
import { navbarSelectors } from '../selectors/navbar';

export const navigateToFrontPage = async () => {
  await t.click(navbarSelectors.mainLink);
};

export const navigateBack = ClientFunction(() => window.history.back());

export const navigateForward = ClientFunction(() => window.history.forward());

export const navigateBackAndForward = async () => {
  await navigateBack();
  await navigateForward();
};

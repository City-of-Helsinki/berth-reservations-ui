import { t, ClientFunction } from 'testcafe';
import { navbar } from '../selectors/navbar';

export const navigateToFrontPage = async () => {
  await t.click(navbar.mainLink);
};

export const navigateBack = ClientFunction(() => window.history.back());

export const navigateForward = ClientFunction(() => window.history.forward());

export const navigateBackAndForward = async () => {
  await navigateBack();
  await navigateForward();
};

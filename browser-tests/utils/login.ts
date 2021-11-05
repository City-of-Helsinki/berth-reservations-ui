import { ssoLogin } from '../ssoLogin';
import { login as loginButton } from '../selectors/login';
import { testUsername, testUserPassword } from './settings';
// import { navigation } from '../pages/navigation';
import { navbarSelectors } from '../selectors/navbar';

export const login = async (t: TestController) => {
  await t.click(navbarSelectors.loginButton);

  await t
    .click(ssoLogin.loginLink)
    .typeText(ssoLogin.username, testUsername())
    .typeText(ssoLogin.password, testUserPassword())
    .click(ssoLogin.loginButton);

  try {
    if (await ssoLogin.permissionRequestHeading.exists) {
      await t.click(ssoLogin.allowButton);
    }
  } catch {
    // all is well, do nothing
  }

  // await t.expect(navigation.sidebarContainer.exists).ok({ timeout: 20000 });
  await t.expect(navbarSelectors.mainLink).ok({ timeout: 20000 });
};

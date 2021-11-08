import { Selector } from 'testcafe';
import { screen } from '@testing-library/testcafe';

export const ssoLogin = {
  loginLink: Selector('.login-method-helusername'),
  username: Selector('#username'),
  password: Selector('#password'),
  loginButton: Selector('#kc-login'),
  permissionRequestHeading: screen.getByText('Permission request'),
  allowButton: screen.getByRole('button', { name: 'Allow' }),
};

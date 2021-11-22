import { Selector } from 'testcafe';
import { screen } from '@testing-library/testcafe';

export const ssoLogin = {
  loginLink: Selector('.login-method-heltunnistussuomifi'),
  testUser: Selector('#li_fakevetuma2'),
  ssnInput: Selector('#hetu_input'),
  authButton: Selector('#tunnistaudu'),
  continueButton: Selector('#continue-button'),
  acceptButton: Selector('#kc-accept'),
  loginButton: Selector('#kc-login'),
  permissionRequestHeading: screen.getByText('Permission request'),
  allowButton: screen.getByRole('button', { name: 'Allow' }),
};

import axios from 'axios';
import { User } from 'oidc-client';

import authService, { API_TOKENS, userManager } from '../authService';

type MockedGet = jest.MockedFunction<typeof axios['get']>;
jest.mock('axios', () => ({
  get: jest.fn() as MockedGet,
}));

describe('authService', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('endLogin', () => {
    const access_token = 'db237bc3-e197-43de-8c86-3feea4c5f886';
    const mockUser = ({
      name: 'Penelope Krajcik',
      access_token,
    } as unknown) as User;

    beforeEach(() => {
      (axios.get as MockedGet).mockReset();
      (axios.get as MockedGet).mockResolvedValue({
        data: {
          token: access_token,
        },
      });
    });

    it('should call signinRedirectCallback from oidc', () => {
      const signinRedirectCallback = jest
        .spyOn(userManager, 'signinRedirectCallback')
        .mockImplementation(() => Promise.resolve(mockUser));

      authService.endLogin();

      expect(signinRedirectCallback).toHaveBeenCalledTimes(1);
    });

    it('should return the same user object returned from signinRedirectCallback', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signinRedirectCallback').mockReturnValue(Promise.resolve(mockUser));

      const user = await authService.endLogin();

      expect(user).toBe(mockUser);
    });

    it('should set the user in localStorage before the function returns', async () => {
      expect.assertions(1);
      jest.spyOn(Storage.prototype, 'setItem');
      jest.spyOn(userManager, 'signinRedirectCallback').mockResolvedValue(mockUser);

      await authService.endLogin();

      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchApiTokens', () => {
    const access_token = 'db237bc3-e197-43de-8c86-3feea4c5f886';
    const mockUser = ({
      name: 'Penelope Krajcik',
      access_token,
    } as unknown) as User;

    beforeEach(() => {
      (axios.get as MockedGet).mockReset();
      (axios.get as MockedGet).mockResolvedValue({
        data: {
          firstToken: '71ffd52c-5985-46d3-b445-490554f4012a',
          secondToken: 'de7c2a83-07f2-46bf-8417-8f648adbc7be',
        },
      });
    });

    it('should call axios.get with the right arguments', async () => {
      expect.assertions(2);

      await authService.fetchApiTokens(mockUser);

      expect(axios.get as MockedGet).toHaveBeenCalledTimes(1);
      expect((axios.get as MockedGet).mock.calls[0]).toMatchSnapshot();
    });

    it('should call localStorage.setItem with the right arguments', async () => {
      expect.assertions(2);
      jest.spyOn(Storage.prototype, 'setItem');
      type SetItemMock = jest.MockedFunction<typeof Storage.prototype.setItem>;

      await authService.fetchApiTokens(mockUser);

      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect((localStorage.setItem as SetItemMock).mock.calls[0]).toMatchSnapshot();
    });
  });

  describe('getTokens', () => {
    it('should get API_TOKENS from localStorage', () => {
      jest.spyOn(Storage.prototype, 'getItem');

      authService.getTokens();

      expect(localStorage.getItem).toHaveBeenNthCalledWith(1, API_TOKENS);
    });
  });

  describe('getUser', () => {
    it('should call getUser from oidc', () => {
      const getUser = jest.spyOn(userManager, 'getUser');

      authService.getUser();

      expect(getUser).toHaveBeenCalledTimes(1);
    });

    it('should resolve to the user value which has been resolved from getUser', async () => {
      expect.assertions(1);
      const mockUser = ({ name: 'Sam Littel' } as unknown) as User;
      jest.spyOn(userManager, 'getUser').mockResolvedValueOnce(mockUser);

      const user = await authService.getUser();

      expect(user).toBe(mockUser);
    });
  });

  describe('isAuthenticated', () => {
    it('should get oidc user from sessionStorage', () => {
      jest.spyOn(Storage.prototype, 'getItem');

      authService.isAuthenticated();

      expect(sessionStorage.getItem).toHaveBeenNthCalledWith(
        1,
        `oidc.user:${process.env.REACT_APP_TUNNISTAMO_URI}:${process.env.REACT_APP_TUNNISTAMO_CLIENT_ID}`
      );
    });

    it('should call getTokens', () => {
      jest.spyOn(authService, 'getTokens');

      authService.isAuthenticated();

      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });

    it('should return false if getTokens returns null', () => {
      jest.spyOn(authService, 'getTokens').mockReturnValue(null);

      expect(authService.isAuthenticated()).toBe(false);
      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });

    it("should return false if oidc user from sessionStorage doesn't exist", () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);

      sessionStorage.clear();

      expect(authService.isAuthenticated()).toBe(false);
      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });

    it("should return false if oidc user from sessionStorage doesn't have an access_token property", () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      const invalidUser = JSON.stringify({});
      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);

      sessionStorage.setItem(
        `oidc.user:${process.env.REACT_APP_TUNNISTAMO_URI}:${process.env.REACT_APP_TUNNISTAMO_CLIENT_ID}`,
        invalidUser
      );

      expect(authService.isAuthenticated()).toBe(false);
      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });

    it('should return true if oidc user is valid and tokens are returned from getTokens', () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      const validUser = JSON.stringify({
        name: 'Mr. Louisa Tromp',
        access_token: '5ed3abc5-9b65-4879-8d09-3cd8499650ef',
      });
      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);

      sessionStorage.setItem(
        `oidc.user:${process.env.REACT_APP_TUNNISTAMO_URI}:${process.env.REACT_APP_TUNNISTAMO_CLIENT_ID}`,
        validUser
      );

      expect(authService.isAuthenticated()).toBe(true);
      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });
  });

  describe('login', () => {
    it('should call signinRedirect from oidc with the provided path', async () => {
      const path = '/applications';
      const signinRedirect = jest.spyOn(userManager, 'signinRedirect').mockImplementation(() => Promise.resolve());

      await authService.login(path);

      expect(signinRedirect).toHaveBeenNthCalledWith(1, { data: { path } });
    });
  });

  describe('logout', () => {
    it('should call signoutRedirect from oidc', async () => {
      const signoutRedirect = jest.spyOn(userManager, 'signoutRedirect');

      await authService.logout();

      expect(signoutRedirect).toHaveBeenCalledTimes(1);
    });

    it('should remove the tokens from localStorage', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signoutRedirect');
      const apiTokens = 'a8d56df4-7ae8-4fbf-bf73-f366cd6fc479';

      localStorage.setItem(API_TOKENS, apiTokens);
      await authService.logout();

      expect(localStorage.getItem(API_TOKENS)).toBeNull();
    });

    it('should call clearStaleState', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signoutRedirect');
      jest.spyOn(userManager, 'clearStaleState').mockResolvedValue();

      await authService.logout();

      expect(userManager.clearStaleState).toHaveBeenCalledTimes(1);
    });
  });

  describe('renewToken', () => {
    it('should call signinSilent from oidc', async () => {
      const mockUser = ({ name: 'Camilla Howe' } as unknown) as User;
      const signinSilent = jest.spyOn(userManager, 'signinSilent').mockResolvedValueOnce(mockUser);

      await authService.renewToken();

      expect(signinSilent).toHaveBeenCalledTimes(1);
    });

    it('should resolve to the user value which has been resolved from signinSilent', async () => {
      expect.assertions(1);
      const mockUser = ({ name: 'Camilla Howe' } as unknown) as User;
      jest.spyOn(userManager, 'signinSilent').mockResolvedValueOnce(mockUser);

      const user = await authService.renewToken();

      expect(user).toBe(mockUser);
    });
  });
});

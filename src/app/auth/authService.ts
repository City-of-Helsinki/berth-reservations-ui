import axios from 'axios';
import { User, Log, UserManager, UserManagerSettings } from 'oidc-client';

export const API_TOKENS = 'apiTokens';

const authService = () => {
  const origin = window.location.origin;
  const {
    REACT_APP_TUNNISTAMO_SCOPE_BERTHS: berthScope,
    REACT_APP_TUNNISTAMO_SCOPE_PROFILE: profileScope,
  } = process.env;
  const settings: UserManagerSettings = {
    authority: process.env.REACT_APP_TUNNISTAMO_URI,
    automaticSilentRenew: true,
    client_id: process.env.REACT_APP_TUNNISTAMO_CLIENT_ID,
    redirect_uri: `${origin}/callback`,
    post_logout_redirect_uri: origin,
    response_type: 'id_token token',
    silent_redirect_uri: `${origin}/silent-callback.html`,
    scope: `openid ${berthScope} ${profileScope}`,
  };

  // Logger
  Log.logger = console;
  Log.level = Log.ERROR;

  // User Manager instance
  const userManager = new UserManager(settings);

  userManager.events.addAccessTokenExpired(() => {
    return logout();
  });

  userManager.events.addSilentRenewError(() => {
    return logout();
  });

  userManager.events.addUserSignedOut(() => {
    userManager.clearStaleState().finally(() => {
      localStorage.removeItem(API_TOKENS);
    });
  });

  userManager.events.addUserLoaded((user) => {
    return fetchApiTokens(user);
  });

  const endLogin = async (): Promise<User> => {
    const user = await userManager.signinRedirectCallback();
    await fetchApiTokens(user);
    return user;
  };

  const fetchApiTokens = async (user: User): Promise<void> => {
    const { data: apiTokens } = await axios.get(`${process.env.REACT_APP_TUNNISTAMO_API_TOKEN_ENDPOINT}/`, {
      baseURL: process.env.REACT_APP_TUNNISTAMO_URI,
      headers: {
        Authorization: `bearer ${user.access_token}`,
      },
    });

    localStorage.setItem(API_TOKENS, JSON.stringify(apiTokens));
  };

  const getTokens = (): string | null => {
    return localStorage.getItem(API_TOKENS);
  };

  const getUser = (): Promise<User | null> => {
    return userManager.getUser();
  };

  const isAuthenticated = () => {
    const oidcStorage = sessionStorage.getItem(
      `oidc.user:${process.env.REACT_APP_TUNNISTAMO_URI}:${process.env.REACT_APP_TUNNISTAMO_CLIENT_ID}`
    );
    const apiTokens = getTokens();

    return !!oidcStorage && !!JSON.parse(oidcStorage).access_token && !!apiTokens;
  };

  const login = (path = '/'): Promise<void> => {
    return userManager.signinRedirect({ data: { path } });
  };

  const logout = async (): Promise<void> => {
    localStorage.removeItem(API_TOKENS);
    userManager.clearStaleState().finally(() => {
      return userManager.signoutRedirect();
    });
  };

  const renewToken = (): Promise<User> => {
    return userManager.signinSilent();
  };

  return {
    endLogin,
    getTokens,
    getUser,
    isAuthenticated,
    login,
    logout,
    renewToken,
  };
};

export default authService();

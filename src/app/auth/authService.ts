import axios from 'axios';
import { User, Log, UserManager } from 'oidc-client';

const origin = window.location.origin;
const {
  REACT_APP_TUNNISTAMO_SCOPE_BERTHS: berthScope,
  REACT_APP_TUNNISTAMO_SCOPE_PROFILE: profileScope,
  REACT_APP_TUNNISTAMO_URI: tunnistamoUri,
  REACT_APP_TUNNISTAMO_CLIENT_ID: tunnistamoClientId,
  REACT_APP_TUNNISTAMO_API_TOKEN_ENDPOINT: tunnistamoApiTokenEndpoint,
} = process.env;

export const API_TOKENS = 'apiTokens';

// oidc-client logging
Log.logger = console;
Log.level = Log.ERROR;

/* Exported for testing purposes only */
export const userManager = new UserManager({
  authority: tunnistamoUri,
  automaticSilentRenew: true,
  client_id: tunnistamoClientId,
  redirect_uri: `${origin}/callback`,
  post_logout_redirect_uri: origin,
  response_type: 'id_token token',
  silent_redirect_uri: `${origin}/silent-callback.html`,
  scope: `openid ${berthScope} ${profileScope}`,
});

const clearUser = () => {
  userManager.clearStaleState().finally(() => {
    localStorage.removeItem(API_TOKENS);
  });
};

userManager.events.addAccessTokenExpired(clearUser);
userManager.events.addSilentRenewError(clearUser);
userManager.events.addUserLoaded((user) => authService.fetchApiTokens(user));
userManager.events.addUserUnloaded(clearUser);

const endLogin = async (): Promise<User> => {
  const user = await userManager.signinRedirectCallback();
  await authService.fetchApiTokens(user);
  return user;
};

const fetchApiTokens = async (user: User): Promise<void> => {
  const { data: apiTokens } = await axios.get(`${tunnistamoApiTokenEndpoint}/`, {
    baseURL: tunnistamoUri,
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
  const oidcStorage = sessionStorage.getItem(`oidc.user:${tunnistamoUri}:${tunnistamoClientId}`);
  const apiTokens = authService.getTokens();

  return !!oidcStorage && !!JSON.parse(oidcStorage).access_token && !!apiTokens;
};

const login = (path = '/'): Promise<void> => {
  return userManager.signinRedirect({ data: { path } });
};

const logout = async (): Promise<void> => {
  return userManager.signoutRedirect();
};

const renewToken = (): Promise<User> => {
  return userManager.signinSilent();
};

const authService = {
  endLogin,
  fetchApiTokens,
  getTokens,
  getUser,
  isAuthenticated,
  login,
  logout,
  renewToken,
};

export default authService;

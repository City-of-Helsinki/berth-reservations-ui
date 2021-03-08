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

export const fetchApiTokens = async (user: User): Promise<void> => {
  const { data: apiTokens } = await axios.get(`${tunnistamoApiTokenEndpoint}/`, {
    baseURL: tunnistamoUri,
    headers: {
      Authorization: `bearer ${user.access_token}`,
    },
  });

  localStorage.setItem(API_TOKENS, JSON.stringify(apiTokens));
};

// oidc-client logging
Log.logger = console;
Log.level = Log.ERROR;

const userManager = new UserManager({
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
userManager.events.addUserLoaded((user) => fetchApiTokens(user));
userManager.events.addUserUnloaded(clearUser);

export const endLogin = async (): Promise<User> => {
  const user = await userManager.signinRedirectCallback();
  await fetchApiTokens(user);
  return user;
};

export const getTokens = (): string | null => {
  return localStorage.getItem(API_TOKENS);
};

export const getUser = (): Promise<User | null> => {
  return userManager.getUser();
};

export const isAuthenticated = () => {
  const oidcStorage = sessionStorage.getItem(`oidc.user:${tunnistamoUri}:${tunnistamoClientId}`);
  const apiTokens = getTokens();

  return !!oidcStorage && !!JSON.parse(oidcStorage).access_token && !!apiTokens;
};

export const login = (path = '/'): Promise<void> => {
  return userManager.signinRedirect({ data: { path } });
};

export const logout = async (): Promise<void> => {
  return userManager.signoutRedirect();
};

export const renewToken = (): Promise<User> => {
  return userManager.signinSilent();
};

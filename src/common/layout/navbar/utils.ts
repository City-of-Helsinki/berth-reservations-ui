import React from 'react';
import { matchPath } from 'react-router';
import { History, Location } from 'history';

export const localizedRootUrl = (lang: string) => `/${lang}`;

export const localizedLink = (url: string, lang: string) => `${localizedRootUrl(lang)}${url}`;

export const stripUrlLocale = (url: string) =>
  url.startsWith('/fi') || url.startsWith('/sv') || url.startsWith('/en') ? url.substring(3) : url;

export const isLinkActive = (url: string, location: Location) => !!matchPath(location.pathname, url);

export const makeNavigationItemProps = (url: string, history: History) => ({
  href: url,
  onClick: (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(url);
  },
});

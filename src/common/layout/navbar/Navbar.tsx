import { Navigation, NavigationProps } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './navbar.scss';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const location = useLocation();

  const localizedRootUrl = (lang: string) => `/${lang}`;
  const localizedLink = (url: string, lang: string = language) => `${localizedRootUrl(lang)}${url}`;
  const isLinkActive = (url: string) => !!matchPath(location.pathname, url);

  const navigationProps: NavigationProps = {
    className: 'vene-navbar',
    logoLanguage: language === 'sv' ? 'sv' : 'fi',
    menuToggleAriaLabel: '',
    skipTo: '',
    skipToContentLabel: '',
    title: t('site.front.title'),
    titleUrl: localizedLink('/'),
  };

  const languages = ['fi', 'sv', 'en'];
  const links = [
    {
      url: '/berths',
      label: t('site.berth.title'),
    },
    {
      url: '/winter-storage',
      label: t('site.winter.title'),
    },
    {
      url: '/unmarked-winter-storage',
      label: t('site.unmarked_winter_storage.title'),
    },
  ];

  return (
    <Navigation {...navigationProps}>
      <Navigation.Row>
        {links.map(({ label, url }) => (
          <Navigation.Item
            key={url}
            active={isLinkActive(localizedLink(url))}
            href={localizedLink(url)}
            label={label}
          />
        ))}
      </Navigation.Row>

      <Navigation.Actions>
        <Navigation.LanguageSelector label={language.toUpperCase()} buttonAriaLabel={'site.language.select'}>
          {languages.map((lang) => (
            <Navigation.Item key={lang} href={localizedLink('/', lang)} label={t(`site.language.${lang}`)} />
          ))}
        </Navigation.LanguageSelector>
      </Navigation.Actions>
    </Navigation>
  );
};

export default Navbar;

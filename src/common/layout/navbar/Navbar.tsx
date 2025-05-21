import { Navigation, NavigationProps } from 'hds-react';
import { useTranslation } from 'react-i18next';
import './navbar.scss';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import authService from '../../../app/auth/authService';
import { useCurrentUser } from '../../../app/auth/hooks';
import { isUserAuthenticationEnabled } from '../../utils/featureFlags';
import { isLinkActive, localizedLink, makeNavigationItemProps, stripUrlLocale } from './utils';

const Navbar = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const currentUser = useCurrentUser();

  const userName = currentUser?.name ?? '-';
  const currentLocation = `${location.pathname}${location.search}${location.hash}`;
  const currentLocationWithoutLocale = stripUrlLocale(currentLocation);
  const loginQueryString = `?referrer=${encodeURIComponent(currentLocation)}`;

  const navigationProps: NavigationProps = {
    className: 'vene-navbar',
    logoLanguage: language === 'sv' ? 'sv' : 'fi',
    menuToggleAriaLabel: t('site.navbar.menu_label'),
    skipTo: '#main',
    skipToContentLabel: t('site.navbar.skip_to_content'),
    title: t('site.front.title'),
    titleUrl: localizedLink('/', language),
  };
  const languages = ['fi', 'sv', 'en'];
  const links = [
    {
      url: '/berths',
      label: t('site.berth.title'),
    },
  ];

  return (
    <Navigation {...navigationProps}>
      <Navigation.Row>
        {links.map(({ label, url }) => (
          <Navigation.Item
            key={url}
            active={isLinkActive(localizedLink(url, language), location)}
            {...makeNavigationItemProps(localizedLink(url, language), history)}
            label={label}
          />
        ))}
      </Navigation.Row>

      <Navigation.Actions>
        {isUserAuthenticationEnabled && (
          <Navigation.User
            authenticated={authService.isAuthenticated()}
            label={t('site.navbar.log_in')}
            userName={userName}
            onSignIn={() => history.push(localizedLink(`/login${loginQueryString}`, language))}
          >
            <Navigation.Item
              label={t('site.navbar.profile')}
              {...makeNavigationItemProps(localizedLink('/profile', language), history)}
            />
            <Navigation.Item
              label={t('site.navbar.log_out')}
              {...makeNavigationItemProps(localizedLink('/logout', language), history)}
            />
          </Navigation.User>
        )}

        <Navigation.LanguageSelector label={language.toUpperCase()} buttonAriaLabel={'site.language.select'}>
          {languages.map((lang) => (
            <Navigation.Item
              key={lang}
              {...makeNavigationItemProps(localizedLink(currentLocationWithoutLocale, lang), history)}
              label={t(`site.language.${lang}`)}
            />
          ))}
        </Navigation.LanguageSelector>
      </Navigation.Actions>
    </Navigation>
  );
};

export default Navbar;

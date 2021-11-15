import { Navigation, NavigationProps } from 'hds-react';
import { useTranslation } from 'react-i18next';
import './navbar.scss';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import authService from '../../../app/auth/authService';
import { useCurrentUser } from '../../../app/auth/hooks';
import { isUserAuthenticationEnabled } from '../../utils/featureFlags';
import { isLinkActive, localizedLink, makeNavigationItemProps, stripUrlLocale } from './utils';
import { LocaleOpts } from '../../types/translation';

interface NavbarProps {
  disableNav?: boolean;
}

const Navbar = ({ disableNav }: NavbarProps) => {
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

  const navigationProps: NavigationProps = {
    className: 'vene-navbar',
    logoLanguage: language === 'sv' ? 'sv' : 'fi',
    menuToggleAriaLabel: t('site.navbar.menu_label'),
    skipTo: '#main',
    skipToContentLabel: t('site.navbar.skip_to_content'),
    title: t('site.front.title'),
    titleUrl: localizedLink('/', language),
  };
  const languages = Object.values(LocaleOpts);
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

  if (disableNav) return <Navigation {...navigationProps}></Navigation>;

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
            onSignIn={() => authService.login(currentLocation)}
          >
            <Navigation.Item
              label={t('site.navbar.profile')}
              {...makeNavigationItemProps(localizedLink('/profile', language), history)}
            />
            <Navigation.Item href="#" label={t('site.navbar.log_out')} onClick={() => authService.logout()} />
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

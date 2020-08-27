import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Nav, Navbar as BSNavbar } from 'reactstrap';

import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import LanguageDropdown from '../languageDropdown/LanguageDropdown';

import './navbar.scss';
import { isUnmarkedWinterStorageEnabled } from '../../../utils/featureFlags';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="vene-navbar">
      <div className="vene-navbar__top">
        <Container>
          <BSNavbar expand="md">
            <LocalizedLink className="vene-navbar__main-link" id="main-link" to="/">
              <Icon className="vene-navbar__icon" name="helsinkiLogo" />
              <span className="vene-navbar__title">{t('site.front.title')}</span>
            </LocalizedLink>
            <Nav className="ml-auto" navbar>
              <LanguageDropdown />
            </Nav>
          </BSNavbar>
        </Container>
      </div>
      <Container>
        <Nav className="vene-navbar__links-wrapper">
          <LocalizedLink
            to="/berths"
            className="vene-navbar__link"
            activeClassName="vene-navbar__link--active"
          >
            <span>{t('site.berth.title')}</span>
          </LocalizedLink>

          <LocalizedLink
            to="/winter-storage"
            className="vene-navbar__link"
            activeClassName="vene-navbar__link--active"
          >
            <span>{t('site.winter.title')}</span>
          </LocalizedLink>

          {isUnmarkedWinterStorageEnabled && (
            <LocalizedLink
              to="/unmarked-winter-storage"
              className="vene-navbar__link"
              activeClassName="vene-navbar__link--active"
            >
              <span>{t('site.unmarked_winter_storage.title')}</span>
            </LocalizedLink>
          )}
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;

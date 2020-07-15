import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Nav, Navbar as BSNavbar } from 'reactstrap';

import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import LanguageDropdown from '../languageDropdown/LanguageDropdown';

import './navbar.scss';

const Navbar = () => {
  return (
    <div className="vene-navbar">
      <div className="vene-navbar__top">
        <Container>
          <BSNavbar expand="md">
            <LocalizedLink className="vene-navbar__main-link" id="main-link" to="/">
              <Icon className="vene-navbar__icon" name="helsinkiLogo" />
              <FormattedMessage id="site.front.title">
                {(txt) => <span className="vene-navbar__title">{txt}</span>}
              </FormattedMessage>
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
            <FormattedMessage id="site.berth.title" />
          </LocalizedLink>

          <LocalizedLink
            to="/winter-storage"
            className="vene-navbar__link"
            activeClassName="vene-navbar__link--active"
          >
            <FormattedMessage id="site.winter.title" />
          </LocalizedLink>
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;

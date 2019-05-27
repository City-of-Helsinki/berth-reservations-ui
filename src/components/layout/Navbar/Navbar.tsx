import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Nav, Navbar as BSNavbar, NavItem } from 'reactstrap';

import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import LanguageDropdown from '../LanguageDropdown';

import './navbar.scss';

const Navbar = () => {
  return (
    <div className="vene-navbar">
      <div className="vene-navbar__top">
        <Container>
          <BSNavbar expand="md">
            {/* <NavItem> */}
            <LocalizedLink to="/">
              <Icon className="vene-navbar__icon" name="helsinkiLogo" />
            </LocalizedLink>
            {/* </NavItem> */}
            <Nav className="ml-auto" navbar>
              <LanguageDropdown />
            </Nav>
          </BSNavbar>
        </Container>
      </div>
      <div className="vene-navbar__bottom">
        <Container>
          <Nav expand="md">
            <LocalizedLink
              to="/"
              className="vene-navbar__link vene-navbar__link--main"
              activeClassName="vene-navbar__link--active"
              exact
            >
              <FormattedMessage id="site.front.title" />
            </LocalizedLink>

            <LocalizedLink
              to="/berths"
              className="vene-navbar__link"
              activeClassName="vene-navbar__link--active"
            >
              <FormattedMessage id="site.berth.title" />
            </LocalizedLink>

            <LocalizedLink
              to="/winter_storage"
              className="vene-navbar__link"
              activeClassName="vene-navbar__link--active"
            >
              <FormattedMessage id="site.winter.title" />
            </LocalizedLink>
          </Nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

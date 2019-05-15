import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Nav, Navbar as BSNavbar, NavbarBrand } from 'reactstrap';
import Icon from '../../common/Icon';
import LanguageDropdown from '../LanguageDropdown';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="vene-navbar">
      <div className="vene-navbar__top">
        <Container>
          <BSNavbar expand="md">
            <NavbarBrand href="/">
              <Icon name="helsinkiLogo" />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <LanguageDropdown />
            </Nav>
          </BSNavbar>
        </Container>
      </div>
      <div className="vene-navbar__bottom">
        <Container>
          <BSNavbar expand="md">
            <NavbarBrand href="berths">
              <FormattedMessage id="site.berth.title" />
            </NavbarBrand>
            <NavbarBrand href="winter_storage">
              <FormattedMessage id="site.winter.title" />
            </NavbarBrand>
          </BSNavbar>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

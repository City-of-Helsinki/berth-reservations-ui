import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Nav, Navbar as BSNavbar, NavbarBrand } from 'reactstrap';
import Icon from '../../common/Icon';
import LanguageDropdown from '../LanguageDropdown';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="app-Navbar">
      <div className="app-Navbar__top">
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
      <div className="app-Navbar__bottom">
        <Container>
          <BSNavbar expand="md">
            <NavbarBrand href="/">
              <FormattedMessage id="site.title" />
            </NavbarBrand>
          </BSNavbar>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

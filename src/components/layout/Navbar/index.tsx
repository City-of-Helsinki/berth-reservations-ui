import React, { SFC } from 'react';
import { FormattedMessage } from 'react-intl';
import { match as matchType, withRouter } from 'react-router';
import { Container, Nav, Navbar as BSNavbar, NavbarBrand } from 'reactstrap';
import { berthSteps, winterSteps } from '../../../constants/StepConstant';
import Icon from '../../common/Icon';
import LanguageDropdown from '../LanguageDropdown';
import './Navbar.scss';

const Navbar: SFC<{ match: matchType<{ locale: string }> }> = ({
  match: {
    params: { locale }
  }
}) => {
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
            <NavbarBrand href={`/${locale}/${berthSteps[0].linkTo}`}>
              <FormattedMessage id="site.berth.title" />
            </NavbarBrand>
            <NavbarBrand href={`/${locale}/${winterSteps[0].linkTo}`}>
              <FormattedMessage id="site.winter_storage.title" />
            </NavbarBrand>
          </BSNavbar>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Navbar);

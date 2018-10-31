// @flow

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import styled from 'styled-components';

import LanguageDropdown from './LanguageDropdown';
import Icon from '../common/Icon';
import KoroSection from './KoroSection';
import Footer from './Footer';
import heroImage from '../../assets/images/hero_image_berth.jpg';

type Props = {
  children: any
};

const Content = styled.div`
  background-color: white;
  padding-bottom: 3rem;
`;

const TopNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.helFog};
  & a {
    color: #000;
  }
  & a:hover {
    text-decoration: none;
    color: #000;
  }
`;

const TopKoro = styled(KoroSection).attrs({
  top: true
})`
  background-image: url(${heroImage});
  background-size: cover;
  & > div {
    padding: 4em;
    height: 25em;
    h1 {
      font-size: 5em;
      color: #fff;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const BottomKoro = styled(KoroSection).attrs({
  top: true
})``;

const Layout = ({ children }: Props) => (
  <Fragment>
    <TopNavbar expand="md">
      <NavbarBrand href="/">
        <Icon name="helsinkiLogo" width="100" color="#000" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <LanguageDropdown />
      </Nav>
    </TopNavbar>
    <Navbar color="white" light expand="md">
      <NavbarBrand href="/">
        <FormattedMessage id="site.title" />
      </NavbarBrand>
    </Navbar>
    <TopKoro color="fog">
      <div>
        <FormattedMessage tagName="h1" id="site.title" />
      </div>
    </TopKoro>
    <Content>{children}</Content>
    <BottomKoro color="blue" />
    <Footer />
  </Fragment>
);

export default Layout;

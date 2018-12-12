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
import responsive from '../../utils/responsive';

type Props = {
  children: any,
  hero?: boolean
};

const TopNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.helFog};
  height: 3.5em;
  & a {
    color: #000;
  }
  & a:hover {
    text-decoration: none;
    color: #000;
  }
`;

const BottomNavbar = styled(Navbar)`
  height: 3.5em;
`;

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  padding: 5.5vw;
  min-height:20em;
  h1 {
    font-size: 2em;
    ${responsive.md`
      font-size: 3em;
    `}
    ${responsive.lg`
      font-size: 4em;
    `}
    ${responsive.xl`
      font-size: 5em;
    `}
    color: #fff;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled(KoroSection).attrs({
  bottom: true,
  color: 'fog'
})``;

const Layout = ({ children, hero }: Props) => (
  <Fragment>
    <TopNavbar expand="md">
      <NavbarBrand href="/">
        <Icon name="helsinkiLogo" width="90px" color="#000" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <LanguageDropdown />
      </Nav>
    </TopNavbar>
    <BottomNavbar color="white" light expand="md">
      <NavbarBrand href="/">
        <FormattedMessage id="site.title" />
      </NavbarBrand>
    </BottomNavbar>
    {hero && (
      <Hero>
        <FormattedMessage tagName="h1" id="site.title" />
      </Hero>
    )}
    <Content>{children}</Content>
    <KoroSection bottom color="blue">
      <Footer />
    </KoroSection>
  </Fragment>
);

export default Layout;

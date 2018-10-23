// @flow

import React, { Fragment } from 'react';
import { FormattedMessage, type intlShape } from 'react-intl';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import styled from 'styled-components';

import LanguageDropdown from '../LanguageDropdown';
import Logo from '../Logo';
import KoroSection from '../KoroSection';
import Footer from '../Footer';

type Props = {
  children: Node,
  intl: intlShape
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
  background-image: url('https://images.unsplash.com/photo-1539522264456-269fca8fd3ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=450&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=d82dcc254b7d3329f7ae5c61c6bc1f1b');
  & > div {
    padding: 4em;
    height: 25em;
    h1 {
      font-size: 5em;
      color: #fff;
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
        <Logo />
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

// @flow

import React, { Fragment } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';

import Logo from './Logo';
import KoroSection from './KoroSection';
import Footer from './Footer';

const Content = styled.div`
  background-color: white;
  padding-bottom: 50px;
`;

type Props = {
  children: any
};

const TopNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.helFog};
`;

const TopKoro = styled(KoroSection).attrs({
  top: true
})`
  background-image: url('https://images.unsplash.com/photo-1539522264456-269fca8fd3ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=450&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=d82dcc254b7d3329f7ae5c61c6bc1f1b');
  & > div {
    padding: 4em;
    height: 400px;
    h1 {
      font-size: 60px;
      color: #fff;
    }
  }
`;

const BottomKoro = styled(KoroSection).attrs({
  top: true
})``;

const Page = ({ children }: Props) => (
  <Fragment>
    <TopNavbar expand="md">
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>FI</NavItem>
      </Nav>
    </TopNavbar>
    <Navbar color="white" light expand="md">
      <NavbarBrand href="/">Venepaikkahaku</NavbarBrand>
    </Navbar>
    <TopKoro color="fog">
      <div>
        <h1>Venepaikkahaku</h1>
      </div>
    </TopKoro>
    <Content>{children}</Content>
    <BottomKoro color="blue" />
    <Footer />
  </Fragment>
);

export default Page;

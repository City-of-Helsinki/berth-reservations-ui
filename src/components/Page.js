// @flow

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Logo from './Logo';
import KoroSection from './KoroSection';

type Props = {
  children: any
};

const Page = ({ children }: Props) => (
  <div>
    <Navbar color="info" light expand="md">
      <Logo />
      <Nav className="ml-auto" navbar>
        <NavItem>FI</NavItem>
      </Nav>
    </Navbar>
    <Navbar color="white" light expand="md">
      <NavbarBrand href="/">Venepaikkahaku</NavbarBrand>
    </Navbar>
    <KoroSection theme="hel-berth" type="top">
      Venepaikkahaku
    </KoroSection>
    <div>{children}</div>
    <KoroSection theme="hel-berth" type="bottom">
      Footer info
    </KoroSection>
  </div>
);

export default Page;

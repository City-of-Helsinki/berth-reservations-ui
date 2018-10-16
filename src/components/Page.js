// @flow

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Logo from './Logo';
import KoroSection from './KoroSection';
import styled from 'styled-components';

const Content = styled.div`
  background-color: #9fc9eb;
  padding: 20px;
`;

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
    <KoroSection theme="hel-berth" koroStyle="koro-pulse-top">
      Venepaikkahaku
    </KoroSection>
    <Content>{children}</Content>
    <KoroSection theme="hel-berth" koroStyle="koro-pulse-bottom">
      Footer info
    </KoroSection>
  </div>
);

export default Page;

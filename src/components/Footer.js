import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';

import Logo from './Logo';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.blue};
  color: #fff;
  padding-top: 4em;
  height: 15em;
`;

const OptionsContainer = styled(Container)`
  width: 100%;
`;

const LinksContainer = styled(Container)`
  margin-top: 2em;
  width: 60%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
    display: inline;
    padding-left: 1em;
    padding-right: 1em;
  }

  li + li {
    border-left: 1px solid #fff;
  }
`;

const FooterSection = styled(Col)`
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <OptionsContainer>
      <Row>
        <FooterSection md="4">Venepaikkahaku</FooterSection>
        <FooterSection md="4">
          <Logo />
        </FooterSection>
        <FooterSection md="4">
          <div>Selaa venesatamia</div>
          <div>Hae venepaikkaa</div>
          <div>UKK</div>
        </FooterSection>
      </Row>
    </OptionsContainer>
    <LinksContainer>
      <Row>
        <FooterSection md="12">
          <List>
            <li>Lähetä palautetta</li>
            <li>Ota yhteyttä</li>
            <li>2018 Helsingin kaupunki</li>
          </List>
        </FooterSection>
      </Row>
    </LinksContainer>
  </Wrapper>
);

export default Footer;

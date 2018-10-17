import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';

import Logo from './Logo';

import styles from './Footer.scss';

const Wrapper = styled.div`
  background-color: #0072c6;
  color: #fff;
  padding: 20px;
  height: 200px;
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col md="4">Venepaikkahaku</Col>
        <Col md="4">
          <Logo />
        </Col>
        <Col md="4">sdfsfsdf</Col>
      </Row>
    </Container>
  </Wrapper>
);

export default Footer;

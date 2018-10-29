// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';
import styled from 'styled-components';

const StyledInfoBox = styled.div`
  background-color: #efefef;
  padding: 1.5em;
  margin-bottom: 2em;
`;

const SectionHeader = styled(Col)`
  border-bottom: 1px solid #000;
  padding-left: 0px;
  margin-bottom: 1em;
  margin-top: 1em;
  font-weight: bold;
`;

type Props = {
  values: Object,
  intl: intlShape
};

const OverviewInfo = ({ values, intl }: Props) => (
  <StyledInfoBox>
    <Container fluid>
      <Row>
        <SectionHeader md={12}>
          <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
        </SectionHeader>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:{' '}
          {values.registered_boat.boat_name}
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:{' '}
          {values.registered_boat.register_number}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:{' '}
          {values.registered_boat.type}
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:{' '}
          {values.registered_boat.boat_model}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:{' '}
          {values.registered_boat.width}m
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:{' '}
          {values.registered_boat.length}m
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_depth" />:{' '}
          {values.registered_boat.depth}m
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:{' '}
          {values.registered_boat.weight}
          kg
        </Col>
      </Row>
      <Row>
        <SectionHeader md={12}>
          <FormattedMessage tagName="h6" id="page.overview.info.berths" />
        </SectionHeader>
      </Row>
      <Row>
        <Col md={12}>Kipparilahden satama</Col>
      </Row>
      <Row>
        <Col md={12}>Sarvaston satama</Col>
      </Row>
      <Row>
        <Col md={12}>Ramsaynrannan venesatama</Col>
      </Row>
      <Row>
        <SectionHeader md={12}>
          <FormattedMessage tagName="h6" id="page.overview.info.person" />
        </SectionHeader>
      </Row>
      <Row>
        <Col md={12}>
          {values.private_person.first_name} {values.private_person.last_name}
        </Col>
      </Row>
      <Row>
        <Col md={12}>{values.private_person.ssn}</Col>
      </Row>
      <Row>
        <Col md={12}>{values.private_person.email}</Col>
      </Row>
    </Container>
  </StyledInfoBox>
);

export default injectIntl(OverviewInfo);

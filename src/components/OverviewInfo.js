// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
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

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  values: Object
};

const OverviewInfo = ({ values }: Props) => {
  console.log(JSON.stringify(values));

  return (
    <StyledInfoBox>
      <Container fluid>
        <Row>
          <SectionHeader md={12}>
            <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
          </SectionHeader>
        </Row>
        <Row>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:
            <Data>{values.registered_boat.boat_name}</Data>
          </Col>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
            <Data>{values.registered_boat.register_number}</Data>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
            <Data>{values.registered_boat.type}</Data>
          </Col>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
            <Data>{values.registered_boat.boat_model}</Data>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
            <Data>{values.registered_boat.width}m</Data>
          </Col>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
            <Data>{values.registered_boat.length}m</Data>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />:
            <Data>{values.registered_boat.draught}m</Data>
          </Col>
          <Col md={6}>
            <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:
            <Data>{values.registered_boat.weight}</Data>
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
};

export default OverviewInfo;

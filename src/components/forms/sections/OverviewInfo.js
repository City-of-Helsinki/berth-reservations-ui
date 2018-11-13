// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import LocalizedLink from '../../common/LocalizedLink';
import Icon from '../../common/Icon';

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

const EditIcon = styled(Col)`
  margin-bottom: 1em;
  margin-top: 1em;
  font-weight: bold;
  text-align: right;
`;

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  values: Object,
  tabs: Array<string>
};

const OverviewInfo = ({ values, tabs }: Props) => (
  <StyledInfoBox>
    <Container fluid>
      <Row>
        <SectionHeader md={11}>
          <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
        </SectionHeader>
        <EditIcon md={1}>
          <LocalizedLink to={`form/${tabs[0]}`}>
            <Icon name="pencil" width="30" color="black" />
          </LocalizedLink>
        </EditIcon>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:
          <Data>{values.boat.name}</Data>
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
          <Data>{values.boat.register_number}</Data>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
          <Data>{values.boat.type}</Data>
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
          <Data>{values.boat.model}</Data>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
          <Data>{values.boat.width}m</Data>
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
          <Data>{values.boat.length}m</Data>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />:
          <Data>{values.boat.draught}m</Data>
        </Col>
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:
          <Data>{values.boat.weight}</Data>
          kg
        </Col>
      </Row>
      <Row>
        <SectionHeader md={11}>
          <FormattedMessage tagName="h6" id="page.overview.info.berths" />
        </SectionHeader>
        <EditIcon md={1}>
          <LocalizedLink to="berths">
            <Icon name="pencil" width="30" color="black" />
          </LocalizedLink>
        </EditIcon>
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
        <SectionHeader md={11}>
          <FormattedMessage tagName="h6" id="page.overview.info.person" />
        </SectionHeader>
        <EditIcon md={1}>
          <LocalizedLink to={`form/${tabs[1]}`}>
            <Icon name="pencil" width="30" color="black" />
          </LocalizedLink>
        </EditIcon>
      </Row>
      <Row>
        <Col md={12}>
          {values.applicant.name.first_name} {values.applicant.name.last_name}
        </Col>
      </Row>
      <Row>
        <Col md={12}>{values.applicant.contact.email}</Col>
      </Row>
    </Container>
  </StyledInfoBox>
);

export default OverviewInfo;

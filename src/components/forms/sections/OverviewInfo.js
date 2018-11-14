// @flow

import React, { Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import LocalizedLink from '../../common/LocalizedLink';
import Icon from '../../common/Icon';
import BoatInfo from '../fragments/overview/BoatInfo';
import BoatTypeAndModel from '../fragments/overview/BoatTypeAndModel';
import BoatMeasures from '../fragments/overview/BoatMeasures';
import BoatDraughtAndWeight from '../fragments/overview/BoatDraughtAndWeight';
import Person from '../fragments/overview/Person';
import type { Berths } from '../../../types/berths';
import { type WithBoatType } from '../Selects';

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

type Props = {
  values: Object,
  selectedBerths: Berths,
  tabs: Array<string>
} & WithBoatType;

const OverviewInfo = ({ values, selectedBerths, tabs, boatTypes }: Props) => (
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
      {tabs[0] === 'registered_boat' && (
        <Fragment>
          <BoatInfo boat={values.boat} />
          <BoatTypeAndModel boat={values.boat} boatTypes={boatTypes} />
          <BoatMeasures boat={values.boat} />
          <BoatDraughtAndWeight boat={values.boat} />
        </Fragment>
      )}
      {tabs[0] === 'unregistered_boat' && (
        <Fragment>
          <BoatInfo boat={values.boat} />
          <BoatTypeAndModel boat={values.boat} boatTypes={boatTypes} />
          <BoatMeasures boat={values.boat} />
        </Fragment>
      )}
      {tabs[0] === 'no_boat' && (
        <Fragment>
          <BoatTypeAndModel boat={values.boat} boatTypes={boatTypes} />
          <BoatMeasures boat={values.boat} />
        </Fragment>
      )}
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
        <Col md={12}>
          {selectedBerths.map(berth => (
            <div key={berth.identifier}>{berth.name.fi}</div>
          ))}
        </Col>
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
      <Person person={values.applicant} />
    </Container>
  </StyledInfoBox>
);

export default OverviewInfo;

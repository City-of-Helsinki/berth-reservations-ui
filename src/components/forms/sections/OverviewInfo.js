// @flow

import React, { Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
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
import { getLocalizedText } from '../../../utils/berths';

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

const EditLink = styled(LocalizedLink)`
  display: flex;
  color: currentColor;
`;

type Props = {
  values: Object,
  selectedBerths: Berths,
  tabs: Array<string>,
  intl: IntlShape
} & WithBoatType;

const OverviewInfo = ({ values, selectedBerths, tabs, boatTypes, intl }: Props) => (
  <StyledInfoBox>
    <Container fluid>
      <Row>
        <SectionHeader xs={8} md={10}>
          <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
        </SectionHeader>
        <EditIcon xs={4} md={2}>
          <EditLink to={`form/${tabs[0]}`}>
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </EditLink>
        </EditIcon>
      </Row>
      {tabs[0] === 'registered_boat' && (
        <Fragment>
          <BoatInfo name={values.boat_name} registerNumber={values.boat_registration_number} />
          <BoatTypeAndModel
            boatTypeId={values.boat_type}
            boatModel={values.boat_model}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boat_width} length={values.boat_length} />
          <BoatDraughtAndWeight draught={values.boat_draught} weight={values.boat_weight} />
        </Fragment>
      )}
      {tabs[0] === 'unregistered_boat' && (
        <Fragment>
          <BoatInfo name={values.boat_name} registerNumber={values.boat_registration_number} />
          <BoatTypeAndModel
            boatTypeId={values.boat_type}
            boatModel={values.boat_model}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boat_width} length={values.boat_length} />
        </Fragment>
      )}
      {tabs[0] === 'no_boat' && (
        <Fragment>
          <BoatTypeAndModel
            boatTypeId={values.boat_type}
            boatModel={values.boat_model}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boat_width} length={values.boat_length} />
        </Fragment>
      )}
      <Row>
        <SectionHeader xs={8} md={10}>
          <FormattedMessage tagName="h6" id="page.overview.info.berths" />
        </SectionHeader>
        <EditIcon xs={4} md={2}>
          <EditLink to="berths">
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </EditLink>
        </EditIcon>
      </Row>
      <Row>
        <Col xs={12}>
          {selectedBerths.map((berth, index) => (
            <div key={berth.identifier}>
              {index + 1}. {getLocalizedText(berth.name, intl.locale)}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <SectionHeader xs={8} md={10}>
          <FormattedMessage tagName="h6" id="page.overview.info.person" />
        </SectionHeader>
        <EditIcon xs={4} md={2}>
          <EditLink to={`form/${tabs[1]}`}>
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </EditLink>
        </EditIcon>
      </Row>
      <Person
        firstName={values.first_name}
        lastName={values.last_name}
        email={values.email}
        phoneNumber={values.phone_number}
        address={values.address}
        zipCode={values.zip_code}
        municipality={values.municipality}
      />
    </Container>
  </StyledInfoBox>
);

export default injectIntl(OverviewInfo);

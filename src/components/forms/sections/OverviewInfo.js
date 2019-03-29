// @flow

import React, { Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';

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
import './_overview-info.scss';

type Props = {
  values: Object,
  selectedBerths: Berths,
  tabs: Array<string>,
  intl: IntlShape
} & WithBoatType;

const OverviewInfo = ({ values, selectedBerths, tabs, boatTypes, intl }: Props) => (
  <div className="app-overview-info">
    <Container fluid>
      <Row>
        <Col xs={8} md={10} className="app-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
        </Col>
        <Col xs={4} md={2} className="app-overview-info__edit-icon">
          <LocalizedLink to={`form/${tabs[0]}`} className="app-overview-info__edit-link">
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
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
        <Col xs={8} md={10} className="app-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.berths" />
        </Col>
        <Col xs={4} md={2} className="app-overview-info__edit-icon">
          <LocalizedLink to="berths" className="app-overview-info__edit-link">
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
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
        <Col xs={8} md={10} className="app-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.person" />
        </Col>
        <Col xs={4} md={2} className="app-overview-info__edit-icon">
          <LocalizedLink to={`form/${tabs[1]}`} className="app-overview-info__edit-link">
            <Icon name="pencil" width="30px" height="30px" color="black" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
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
  </div>
);

export default injectIntl(OverviewInfo);

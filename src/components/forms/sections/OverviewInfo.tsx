import React, { Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { ApplicationState } from '../../../redux/types';
import { Berths } from '../../berths/types';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import BoatDraughtAndWeight from '../fragments/overview/BoatDraughtAndWeight';
import BoatInfo from '../fragments/overview/BoatInfo';
import BoatMeasures from '../fragments/overview/BoatMeasures';
import BoatTypeAndModel from '../fragments/overview/BoatTypeAndModel';
import OldBerthInfo from '../fragments/overview/oldBerth/OldBerthInfo';
import Person from '../fragments/overview/Person';
import { WithBoatType } from '../Selects';
import './OverviewInfo.scss';

type Props = {
  values: {
    boatName: string;
    boatRegistrationNumber: string;
    boatType: string;
    boatModel: string;
    boatWidth: number;
    boatLength: number;
    boatDraught: number;
    boatWeight: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    municipality: string;
  };
  selectedBerths: Berths;
  application?: ApplicationState;
  tabs: string[];
} & InjectedIntlProps &
  WithBoatType;

const OverviewInfo = ({ values, selectedBerths, tabs, boatTypes, application }: Props) => (
  <div className="vene-overview-info">
    <Container fluid>
      <OldBerthInfo application={application} />

      <Row>
        <Col xs={8} md={10} className="vene-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
        </Col>
        <Col xs={4} md={2} className="vene-overview-info__edit-icon">
          <LocalizedLink to={`form/${tabs[0]}`} className="vene-overview-info__edit-link">
            <Icon name="pencil" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
      </Row>
      {tabs[0] === 'registered_boat' && (
        <Fragment>
          <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
          <BoatTypeAndModel
            boatTypeId={values.boatType}
            boatModel={values.boatModel}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          <BoatDraughtAndWeight draught={values.boatDraught} weight={values.boatWeight} />
        </Fragment>
      )}
      {tabs[0] === 'unregistered_boat' && (
        <Fragment>
          <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
          <BoatTypeAndModel
            boatTypeId={values.boatType}
            boatModel={values.boatModel}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boatWidth} length={values.boatLength} />
        </Fragment>
      )}
      {tabs[0] === 'no_boat' && (
        <Fragment>
          <BoatTypeAndModel
            boatTypeId={values.boatType}
            boatModel={values.boatModel}
            boatTypes={boatTypes}
          />
          <BoatMeasures width={values.boatWidth} length={values.boatLength} />
        </Fragment>
      )}
      <Row>
        <Col xs={8} md={10} className="vene-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.berths" />
        </Col>
        <Col xs={4} md={2} className="vene-overview-info__edit-icon">
          <LocalizedLink to="berths" className="vene-overview-info__edit-link">
            <Icon name="pencil" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {selectedBerths.map((berth, index) => (
            <div key={berth.id}>
              {index + 1}. {berth.name}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={10} className="vene-overview-info__header">
          <FormattedMessage tagName="h6" id="page.overview.info.person" />
        </Col>
        <Col xs={4} md={2} className="vene-overview-info__edit-icon">
          <LocalizedLink to={`form/${tabs[1]}`} className="vene-overview-info__edit-link">
            <Icon name="pencil" />
            <FormattedMessage tagName="span" id="page.overview.info.edit" />
          </LocalizedLink>
        </Col>
      </Row>
      <Person
        firstName={values.firstName}
        lastName={values.lastName}
        email={values.email}
        phoneNumber={values.phoneNumber}
        address={values.address}
        zipCode={values.zipCode}
        municipality={values.municipality}
      />
    </Container>
  </div>
);

export default injectIntl(OverviewInfo);

import React, { Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { getLocalizedText } from '../../../utils/berths';
import { Berths } from '../../berths/types';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import BoatDraughtAndWeight from '../fragments/overview/BoatDraughtAndWeight';
import BoatInfo from '../fragments/overview/BoatInfo';
import BoatMeasures from '../fragments/overview/BoatMeasures';
import BoatTypeAndModel from '../fragments/overview/BoatTypeAndModel';
import Person from '../fragments/overview/Person';
import { WithBoatType } from '../Selects';

type Props = {
  values: {
    boat_name: string;
    boat_registration_number: string;
    boat_type: string;
    boat_model: string;
    boat_width: number;
    boat_length: number;
    boat_draught: number;
    boat_weight: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    zip_code: string;
    municipality: string;
  };
  selectedBerths: Berths;
  tabs: string[];
} & InjectedIntlProps &
  WithBoatType;

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

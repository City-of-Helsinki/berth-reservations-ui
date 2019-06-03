import React, { Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { ApplicationState } from '../../../redux/types';
import { FormMode } from '../../../types/form';
import { Berths } from '../../berths/types';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import { StepType } from '../../steps/step/Step';
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
  steps: StepType[];
  boatTab: string;
  mode: FormMode;
} & InjectedIntlProps &
  WithBoatType;


const OverviewInfo = ({
  values,
  selectedBerths,
  boatTypes,
  application,
  steps,
  boatTab,
  mode
}: Props) => {
  const isWinterStorageFormMode = mode === FormMode.Winter;

  return (
    <div className="vene-overview-info">
      <Container fluid>
        {!isWinterStorageFormMode && <OldBerthInfo application={application} />}

        <div className="vene-overview-info__header">
          <div className="vene-overview-info__title">
            <FormattedMessage tagName="h6" id="page.overview.info.boat_info" />
          </div>
          <div className="vene-overview-info__edit-icon">
            <LocalizedLink to={steps[2].linkTo} className="vene-overview-info__edit-link">
              <Icon name="pencil" />
              <FormattedMessage tagName="span" id="page.overview.info.edit" />
            </LocalizedLink>
          </div>
        </div>
        {boatTab === 'registered-boat' && (
          <Fragment>
            <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
            <BoatTypeAndModel
              boatTypeId={values.boatType}
              boatModel={values.boatModel}
              boatTypes={boatTypes}
            />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
            {!isWinterStorageFormMode && (
              <BoatDraughtAndWeight draught={values.boatDraught} weight={values.boatWeight} />
            )}
          </Fragment>
        )}
        {boatTab === 'unregistered-boat' && (
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
        {boatTab === 'no-boat' && (
          <Fragment>
            <BoatTypeAndModel
              boatTypeId={values.boatType}
              boatModel={values.boatModel}
              boatTypes={boatTypes}
            />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          </Fragment>
        )}
        <div className="vene-overview-info__header">
          <div className="vene-overview-info__title">
            <FormattedMessage tagName="h6" id="page.overview.info.berths" />
          </div>
          <div className="vene-overview-info__edit-icon">
            <LocalizedLink to={steps[1].linkTo} className="vene-overview-info__edit-link">
              <Icon name="pencil" />
              <FormattedMessage tagName="span" id="page.overview.info.edit" />
            </LocalizedLink>
          </div>
        </div>
        <Row>
          <Col xs={12}>
            {selectedBerths.map((berth, index) => (
              <div key={berth.id}>
                {index + 1}. {berth.name}
              </div>
            ))}
          </Col>
        </Row>
        <div className="vene-overview-info__header">
          <div className="vene-overview-info__title">
            <FormattedMessage tagName="h6" id="page.overview.info.person" />
          </div>
          <div className="vene-overview-info__edit-icon">
            <LocalizedLink to={steps[3].linkTo} className="vene-overview-info__edit-link">
              <Icon name="pencil" />
              <FormattedMessage tagName="span" id="page.overview.info.edit" />
            </LocalizedLink>
          </div>
        </div>
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
};

export default injectIntl(OverviewInfo);

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../fragments/Agreement';
import ApplicationCode from '../fragments/ApplicationCode';
import Newsletter from '../fragments/Newsletter';
import BerthOverviewInfo from './BerthOverviewInfo';

import { ApplicationState } from '../../../redux/types';
import { Berths } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import { WithBoatType } from '../Selects';

type Props = {
  values?: {
    boatName: string;
    boatRegistrationNumber: string;
    boatType: string;
    boatModel: string;
    boatWidth: string;
    boatLength: string;
    boatDraught: string;
    boatWeight: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    municipality: string;
    trailerRegistrationNumber?: string;
  };
  selectedBerths: Berths;
  application?: ApplicationState;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const Submit = ({
  values = {
    boatName: '',
    boatRegistrationNumber: '',
    boatType: '',
    boatModel: '',
    boatWidth: '0',
    boatLength: '0',
    boatDraught: '0',
    boatWeight: '0',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    municipality: ''
  },
  selectedBerths,
  application,
  boatTab,
  boatTypes,
  steps
}: Props) => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
        <div className="vene-form__styled-container">
          <BerthOverviewInfo
            selectedBerths={selectedBerths}
            boatTab={boatTab}
            values={values}
            boatTypes={boatTypes}
            application={application}
            steps={steps}
          />
          <ApplicationCode />
          <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
          <Newsletter />
          <FormattedMessage tagName="h3" id="form.overview.header.agreement.title" />
          <Agreement />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Submit;

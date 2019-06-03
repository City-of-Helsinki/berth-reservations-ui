import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import { ApplicationState } from '../../../redux/types';
import { Berths } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import Agreement from '../fragments/Agreement';
import ApplicationCode from '../fragments/ApplicationCode';
import Newsletter from '../fragments/Newsletter';
import { WithBoatType } from '../Selects';
import OverviewInfo from './OverviewInfo';

type Props = {
  values?: {
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
  steps: StepType[];
} & WithBoatType;

const Submit = ({
  values = {
    boatName: '',
    boatRegistrationNumber: '',
    boatType: '',
    boatModel: '',
    boatWidth: 0,
    boatLength: 0,
    boatDraught: 0,
    boatWeight: 0,
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
  tabs,
  boatTypes,
  steps
}: Props) => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
        <Container className="vene-form__styled-container">
          <OverviewInfo
            selectedBerths={selectedBerths}
            tabs={tabs}
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
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Submit;

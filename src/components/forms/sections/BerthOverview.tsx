import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../fragments/Agreement';
import ApplicationCode from '../fragments/ApplicationCode';
import Newsletter from '../fragments/Newsletter';
import BerthOverviewInfo from './BerthOverviewInfo';

import { ApplicationState } from '../../../redux/types';
import { BerthFormValues } from '../../../types/berth';
import { Berths } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import { WithBoatType } from '../Selects';

type Props = {
  values?: BerthFormValues;
  selectedBerths: Berths;
  application?: ApplicationState;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const BerthOverview = ({
  values,
  selectedBerths,
  application,
  boatTab,
  boatTypes,
  steps,
}: Props) => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
        <div className="vene-form__styled-container">
          {values && (
            <BerthOverviewInfo
              selectedBerths={selectedBerths}
              boatTab={boatTab}
              values={values}
              boatTypes={boatTypes}
              application={application}
              steps={steps}
            />
          )}
          <ApplicationCode />
          <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
          <Newsletter />
          <FormattedMessage tagName="h3" id="form.overview.header.agreement.title" />
          <Agreement label="form.overview.field.berth.guarantee.label" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default BerthOverview;

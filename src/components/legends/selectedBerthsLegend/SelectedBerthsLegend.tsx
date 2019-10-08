import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { StepType } from '../../steps/step/Step';
import Steps from '../../steps/Steps';

import './selectedBerthsLegend.scss';

interface Props {
  legend: { title: string; legend: string };
  steps: StepType[];
}

const SelectedBerthsLegend = ({ steps, legend }: Props) => (
  <div className="vene-berths-legend__legend">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Steps steps={steps} />
          <FormattedMessage tagName="h3" id={legend.title} />
          <FormattedMessage tagName="p" id={legend.legend} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default SelectedBerthsLegend;

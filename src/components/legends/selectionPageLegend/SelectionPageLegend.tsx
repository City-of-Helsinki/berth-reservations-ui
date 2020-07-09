import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { StepType } from '../../steps/step/Step';
import Steps from '../../steps/Steps';

import './selectionPageLegend.scss';

interface Props {
  legend: { title: string; legend: string };
  steps: StepType[];
}

const SelectionPageLegend = ({ steps, legend }: Props) => (
  <div className="vene-selection-page-legend">
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

export default SelectionPageLegend;

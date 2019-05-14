import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Steps from '../../../steps';
import './SelectedBerthsLegend.scss';

interface Props {
  legend: { title: string; legend: string };
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
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

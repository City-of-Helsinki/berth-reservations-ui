import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Steps from '../../../steps';
import './SelectedBerthLegend.scss';

interface Props {
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
}

const BerthsLegend = ({ steps }: Props) => (
  <div className="vene-berths-legend__legend">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Steps steps={steps} />

          <FormattedMessage tagName="h3" id="legend.selected_berths.title" />
          <FormattedMessage tagName="p" id="legend.selected_berths.legend" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default BerthsLegend;

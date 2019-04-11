import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Steps from '../../../steps';
import './SelectedBerthLegend.scss';

const BerthsLegend = () => (
  <div className="vene-berths-legend__legend">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Steps
            steps={[
              {
                key: 'berths',
                completed: true,
                current: false,
                linkTo: `berths`
              },
              {
                key: 'selected_berths',
                completed: false,
                current: true,
                linkTo: undefined
              },
              {
                key: 'boat_information',
                completed: false,
                current: false,
                linkTo: undefined
              },
              {
                key: 'applicant',
                completed: false,
                current: false,
                linkTo: undefined
              },
              {
                key: 'send_application',
                completed: false,
                current: false,
                linkTo: undefined
              }
            ]}
          />

          <FormattedMessage tagName="h3" id="legend.selected_berths.title" />
          <FormattedMessage tagName="p" id="legend.selected_berths.legend" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default BerthsLegend;

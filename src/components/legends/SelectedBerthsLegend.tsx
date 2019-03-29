import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Steps from '../steps/Steps';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
`;

const LegendContainer = styled(Container)`
  padding-bottom: 3em;
`;

const BerthsLegend = () => (
  <Legend>
    <LegendContainer>
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
    </LegendContainer>
  </Legend>
);

export default BerthsLegend;

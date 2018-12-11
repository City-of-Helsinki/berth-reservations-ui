// @flow
import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import Steps from '../steps/Steps';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 3em;
`;

const BerthsLegend = () => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">
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
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);

export default BerthsLegend;

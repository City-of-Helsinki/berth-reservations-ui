// @flow
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';

const Steps = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 4em;
`;

const StepContainer = styled(Container)`
  width: 37.5em;
`;

const StepIcon = styled(Col)`
  text-align: center;
  margin-bottom: 0.625em;
`;

const Circle = styled.div`
  width: 3.125em;
  height: 3.125em;
  display: inline-block;
  border: 0.125em solid #000;
  border-radius: 50%;
  padding-top: 0.5em;
  font-size: 1.25em;
  color: #fff;
  margin-bottom: 0.625em;

  &.active {
    background-color: #0072c6;
  }

  &.checked {
    background-color: #e9ecef;
    color: #000;
  }
`;

export default () => (
  <Steps>
    <StepContainer>
      <Row>
        <StepIcon sm="3">
          <div>
            <Circle className="checked">&#10003;</Circle>
          </div>
          <div>
            <FormattedMessage id="site.steps.berths" />
          </div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle className="active">&nbsp;</Circle>
          </div>
          <div>
            <FormattedMessage id="site.steps.boat_information" />
          </div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle>&nbsp;</Circle>
          </div>
          <div>
            <FormattedMessage id="site.steps.applicant" />
          </div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle>&nbsp;</Circle>
          </div>
          <div>
            <FormattedMessage id="site.steps.send_application" />
          </div>
        </StepIcon>
      </Row>
    </StepContainer>
  </Steps>
);

// @flow
import React from 'react';
import styled from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';
import Step from './Step';

const StepIndicatorSection = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 4em;
  padding-bottom: 2em;
`;

const StepContainer = styled(Container)`
  @media only screen and (min-width: 500px) {
    width: 45em;
  }
`;

const StepColumn = styled(Col)`
  margin-bottom: 0.625em;
`;

type Props = {
  intl: intlShape
};

const Steps = ({ intl }: Props) => (
  <StepIndicatorSection>
    <StepContainer>
      <Row>
        <StepColumn sm="3">
          <Step completed={true} label={intl.messages['site.steps.berths']} />
        </StepColumn>
        <StepColumn sm="3">
          <Step current={true} label={intl.messages['site.steps.boat_information']} />
        </StepColumn>
        <StepColumn sm="3">
          <Step label={intl.messages['site.steps.applicant']} />
        </StepColumn>
        <StepColumn sm="3">
          <Step label={intl.messages['site.steps.send_application']} />
        </StepColumn>
      </Row>
    </StepContainer>
  </StepIndicatorSection>
);

export default injectIntl(Steps);

// @flow
import React from 'react';
import styled from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';
import Step from './Step';
import media from '../utils/responsive';

const StepIndicatorSection = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 4em;
  padding-bottom: 1em;
`;

const StepContainer = styled(Container)`
  ${media.md`
    width: 45em;
  `};
`;

type Props = {
  intl: intlShape
};

const Steps = ({ intl, step, done }: Props) => (
  <StepIndicatorSection>
    <StepContainer>
      <Row>
        <Col sm="3">
          <Step
            completed={step > 1 || done}
            current={step === 1}
            label={intl.messages['site.steps.berths']}
          />
        </Col>
        <Col sm="3">
          <Step
            completed={step > 2 || done}
            current={step === 2}
            label={intl.messages['site.steps.boat_information']}
          />
        </Col>
        <Col sm="3">
          <Step
            completed={step > 3 || done}
            current={step === 3}
            label={intl.messages['site.steps.applicant']}
          />
        </Col>
        <Col sm="3">
          <Step
            completed={step > 4 || done}
            current={step === 4}
            label={intl.messages['site.steps.send_application']}
          />
        </Col>
      </Row>
    </StepContainer>
  </StepIndicatorSection>
);

export default injectIntl(Steps);

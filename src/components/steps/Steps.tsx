import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import styled from 'styled-components';
import Step from './Step';

const StepIndicatorSection = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 2em;
  padding-bottom: 1em;
`;

const StepContainer = styled.div`
  display: flex;
  margin: 0 -0.25em;
`;
interface StepProp {
  key: string;
  completed: boolean;
  current: boolean;
  linkTo?: string;
}
type StepsProp = StepProp[];
type Props = {
  steps: StepsProp;
} & InjectedIntlProps;

const Steps = ({ intl: { formatMessage }, steps }: Props) => (
  <StepIndicatorSection>
    <StepContainer>
      {steps.map(({ key, completed, current, linkTo }) => (
        <Step
          key={key}
          linkTo={linkTo}
          completed={completed}
          current={current}
          label={formatMessage({ id: `site.steps.${key}` })}
        />
      ))}
    </StepContainer>
  </StepIndicatorSection>
);

export default injectIntl(Steps);

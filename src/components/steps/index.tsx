import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Step from './Step';

import './Steps.scss';

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
  <div className="app-Steps">
    {steps.map(({ key, completed, current, linkTo }) => (
      <Step
        key={key}
        linkTo={linkTo}
        completed={completed}
        current={current}
        label={formatMessage({ id: `site.steps.${key}` })}
      />
    ))}
  </div>
);

export default injectIntl(Steps);

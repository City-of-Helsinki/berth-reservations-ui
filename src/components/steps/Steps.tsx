import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Step, { StepType } from './step/Step';

import './Steps.scss';

type Props = {
  steps: StepType[];
} & InjectedIntlProps;

const Steps = ({ intl: { formatMessage }, steps }: Props) => (
  <div className="vene-steps">
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

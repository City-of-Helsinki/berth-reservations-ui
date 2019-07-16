import React from 'react';
import { FormattedMessage } from 'react-intl';

import Step, { StepType } from './step/Step';

import './steps.scss';

export interface Props {
  title: string;
  steps: StepType[];
}

const Steps = ({ title, steps }: Props) => (
  <div className="vene-steps">
    <FormattedMessage id={title}>
      {txt => <h4 className="vene-steps__title">{txt}</h4>}
    </FormattedMessage>
    <div className="vene-steps__items">
      {steps.map(({ key, completed, current, linkTo }) => (
        <Step
          key={key}
          linkTo={linkTo}
          completed={completed}
          current={current}
          label={`site.steps.${key}`}
          className="vene-steps__item"
        />
      ))}
    </div>
  </div>
);

export default Steps;

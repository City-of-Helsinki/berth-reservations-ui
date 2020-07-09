import React from 'react';
import { FormattedMessage } from 'react-intl';

import withApplicationType from '../common/withApplicationType/withApplicationType';

import Step, { StepType } from './step/Step';

import './steps.scss';

export interface Props {
  applicationType: string;
  steps: StepType[];
}

const Steps = ({ applicationType, steps }: Props) => (
  <div className="vene-steps">
    <FormattedMessage id={applicationType}>
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

export default withApplicationType(Steps);

import React from 'react';
import { useTranslation } from 'react-i18next';

import withApplicationType from '../common/withApplicationType/withApplicationType';

import Step, { StepType } from './step/Step';

import './steps.scss';

export interface Props {
  applicationType: string;
  steps: StepType[];
}

const Steps = ({ applicationType, steps }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-steps">
      <h4 className="vene-steps__title">{t(applicationType)}</h4>
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
};

export default withApplicationType(Steps);

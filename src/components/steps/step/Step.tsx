import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LocalizedLink from '../../common/LocalizedLink';

import './step.scss';

export interface StepType {
  completed: boolean;
  current: boolean;
  label: string;
  legend?: {
    title: string;
    legend: string;
  };
  linkTo: string;
}

interface Props extends StepType {
  className?: string;
}

const Step = ({ completed = false, current = false, label, linkTo, className }: Props) => {
  const { t } = useTranslation();

  const step = (
    <>
      <div className={classNames('vene-step__status', { completed, current })} />
      <div className="vene-step__label">{t(label)}</div>
    </>
  );

  return (
    <div className={classNames('vene-step', className)}>
      {linkTo && completed ? (
        <LocalizedLink className="vene-step__link" to={linkTo}>
          {step}
        </LocalizedLink>
      ) : (
        step
      )}
    </div>
  );
};

export default Step;

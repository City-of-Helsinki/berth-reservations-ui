import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocalizedLink from '../../common/LocalizedLink';

import './step.scss';

export interface StepType {
  completed: boolean;
  current: boolean;
  key: string;
  linkTo: string;
}
interface Props extends StepType {
  label: string;
  className?: string;
}

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false,
  };

  render() {
    const { completed, current, label, linkTo, className } = this.props;
    const step = (
      <>
        <div className={classNames('vene-step__status', { completed, current })} />
        <FormattedMessage id={label}>
          {(txt) => <div className="vene-step__label">{txt}</div>}
        </FormattedMessage>
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
  }
}

import classNames from 'classnames';
import React, { Fragment } from 'react';
import LocalizedLink from '../../common/LocalizedLink';
import './Step.scss';

export interface StepType {
  completed: boolean;
  current: boolean;
  key: string;
  linkTo: string;
}
interface Props extends StepType {
  label: string;
}

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false
  };

  render() {
    const { completed, current, label, linkTo } = this.props;

    return (
      <div className="vene-step">
        {linkTo && completed ? (
          <LocalizedLink className="vene-step__link" to={linkTo}>
            <div className={classNames('vene-step__status', { completed, current })} />
            <div className={classNames('vene-step__label', { completed, current })}>{label}</div>
          </LocalizedLink>
        ) : (
          <Fragment>
            <div className={classNames('vene-step__status', { completed, current })} />
            <div className={classNames('vene-step__label', { completed, current })}>{label}</div>
          </Fragment>
        )}
      </div>
    );
  }
}

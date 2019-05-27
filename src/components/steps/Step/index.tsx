import classNames from 'classnames';
import React, { Fragment } from 'react';
import LocalizedLink from '../../common/LocalizedLink';
import './Step.scss';

interface Props {
  completed: boolean;
  current: boolean;
  label: string;
  linkTo?: string;
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
        {linkTo ? (
          <LocalizedLink className="vene-step__link" to={linkTo}>
            <div className={classNames('vene-step__status', { completed, current })} />
            <span className="vene-step__label">{label}</span>
          </LocalizedLink>
        ) : (
          <Fragment>
            <div className={classNames('vene-step__status', { completed, current })} />
            <span className="vene-step__label">{label}</span>
          </Fragment>
        )}
      </div>
    );
  }
}

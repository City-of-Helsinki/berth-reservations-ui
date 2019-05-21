import React, { Component } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Step from './Step';

import { connect } from 'react-redux';
import { match as matchType } from 'react-router';
import { stepsSelector } from '../../redux/selectors/stepsSelector';
import { RouteParams, Store } from '../../redux/types';
import { Steps as StepsType } from './Step/types';
import './Steps.scss';

type Props = {
  steps: StepsType;
  match: matchType<RouteParams> | null;
} & InjectedIntlProps;

class Steps extends Component<Props> {
  render() {
    const {
      intl: { formatMessage },
      steps
    } = this.props;
    return (
      <div className="vene-steps">
        {steps &&
          steps.map(({ key, completed, current, linkTo }) => (
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
  }
}

const mapStateToProps = (state: Store) => {
  return {
    steps: stepsSelector(state)
  };
};

export default connect(mapStateToProps)(injectIntl(Steps));

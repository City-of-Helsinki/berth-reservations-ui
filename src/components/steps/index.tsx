import React, { Component } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Step from './Step';

import { createMatchSelector, RouterRootState } from 'connected-react-router';
import { connect } from 'react-redux';
import { match as matchType } from 'react-router';
import {
  generateSteps as generateStepsAction,
  selectStep as selectStepAction
} from '../../redux/actions/StepsActions';
import { pathNameSelector } from '../../redux/selectors/routerSelector';
import { stepsSelector } from '../../redux/selectors/stepsSelector';
import { RouteParams, Store } from '../../redux/types';
import { CategoryOptions } from '../../types/categoryType';
import { Steps as StepsType } from './Step/types';
import './Steps.scss';

type Props = {
  selectStep: Function;
  generateSteps: Function;
  steps: StepsType;
  match: matchType<RouteParams> | null;
} & InjectedIntlProps;

class Steps extends Component<Props> {
  componentDidMount() {
    const berthRouteNames = [
      'berths',
      'selected',
      'boat_information',
      'applicant',
      'send_application'
    ];
    const winterStorageRouteNames = [
      'winter_areas',
      'review_areas',
      'boat_information',
      'applicant',
      'send_application'
    ];

    const { match } = this.props;

    if (match && match.params.category === CategoryOptions.WINTER_STORAGE) {
      this.props.generateSteps(winterStorageRouteNames, CategoryOptions.WINTER_STORAGE);
    }

    return this.props.generateSteps(winterStorageRouteNames, CategoryOptions.BERTHS);
  }
  render() {
    const {
      intl: { formatMessage },
      selectStep,
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
              onSelect={selectStep}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state: Store) => {
  const pathName = pathNameSelector(state);
  const baseParams = createMatchSelector('/:locale/:category/')(state);
  const viewParams = createMatchSelector('/:locale/:category/:view_name')(state);
  const tabParams = createMatchSelector('/:locale/:category/:view_name/:tab')(state);

  return {
    pathName,
    match: tabParams || viewParams || baseParams,
    steps: stepsSelector(state)
  };
};

const mapDispatchToProps = {
  generateSteps: generateStepsAction,
  selectStep: selectStepAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Steps));

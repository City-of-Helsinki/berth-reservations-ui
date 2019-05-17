import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Step from './Step';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  generateSteps as generateStepsAction,
  selectStep as selectStepAction
} from '../../redux/actions/StepsActions';
import { paramsSelector, pathNameSelector } from '../../redux/selectors/routerSelector';
import { stepsSelector } from '../../redux/selectors/stepsSelector';
import { StepsState, Store } from '../../redux/types';
import { Steps, Steps as StepsType } from './Step/types';
import './Steps.scss';

type Props = {
  selectStep: Function;
  generateSteps: Function;
  steps: Steps;
} & InjectedIntlProps;

const StepContainer = ({ intl: { formatMessage }, selectStep, generateSteps, steps }: Props) => {
  generateSteps({ routeNames: ['concac', 'conku'], urlPrefix: '/conkac' });

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
};

const selector = createStructuredSelector<
  Store,
  { pathName: string; params: object; steps: Steps }
>({
  pathName: pathNameSelector,
  params: paramsSelector,
  steps: stepsSelector
});

const mapDispatchToProps = {
  generateSteps: generateStepsAction,
  selectStep: selectStepAction
};

export default connect(
  selector,
  mapDispatchToProps
)(injectIntl(StepContainer));

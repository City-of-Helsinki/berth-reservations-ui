import { List, Record } from 'immutable';
import { Steps } from '../../components/steps/Step/types';
import { generateSteps } from '../../utils/stepUtils';
import { Action, StepsFactory, StepsState } from '../types';

const defaultSteps: Steps = List([]);

const defaultState: StepsFactory = Record({
  steps: defaultSteps
});

export default (state: StepsState = defaultState(), action: Action): StepsState => {
  const { type, payload } = action;
  switch (type) {
    case 'GENERATE_STEPS':
      const { routeNames, urlPrefix } = payload;

      const steps = generateSteps(routeNames, urlPrefix);

      return state.merge({ steps });

    case 'COMPLETE_STEP':
      const stepKey = action.payload;
      const stepIndex = state.steps.findIndex(step => step.key === stepKey);

      if (stepIndex !== -1) {
        state.setIn(['steps', stepIndex, 'current'], true);
        state.setIn(['steps', stepIndex, 'completed'], true);
      }
      return state;

    case 'RESET_STEPS':
      return defaultState();
    default:
      return state;
  }
};

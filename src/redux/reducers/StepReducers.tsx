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

    case 'SELECT_STEP':
      const selectedIndex = action.payload;
      state.setIn(['steps', selectedIndex, 'current'], true);

      for (let i = 0; i <= selectedIndex; i = i + 1) {
        state.setIn(['steps', i, 'completed'], true);
      }

      return state;

    case 'RESET_STEPS':
      return defaultState();
    default:
      return state;
  }
};

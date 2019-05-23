import { List, Record } from 'immutable';
import { berthSteps, winterSteps } from '../../constants/StepConstant';
import { Action, StepsFactory, StepsState } from '../types';

const defaultState: StepsFactory = Record({
  berthSteps: List(berthSteps),
  winterSteps: List(winterSteps),
  currentBerthStep: 0,
  currentWinterStep: 0
});

export default (state: StepsState = defaultState(), action: Action): StepsState => {
  const { type, payload } = action;

  switch (type) {
    case 'COMPLETE_BERTH_STEP':
      let newBerthSteps = state.berthSteps.setIn([state.currentBerthStep, 'completed'], false);
      newBerthSteps = newBerthSteps.setIn([state.currentBerthStep, 'current'], false);
      newBerthSteps = newBerthSteps.setIn([action.payload, 'completed'], true);
      newBerthSteps = newBerthSteps.setIn([action.payload, 'current'], true);

      return state.merge({ berthSteps: newBerthSteps, currentBerthStep: action.payload });
    case 'RESET_STEPS':
      return defaultState();
    default:
      return state;
  }
};

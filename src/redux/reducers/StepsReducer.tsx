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
      let newBerthSteps = state.berthSteps.setIn([state.currentBerthStep, 'current'], false);
      newBerthSteps = newBerthSteps.update(payload, step =>
        Object.assign({}, step, { current: true, completed: true })
      );

      return state.merge({ berthSteps: newBerthSteps, currentBerthStep: action.payload });

    case 'COMPLETE_WINTER_STEP':
      let newWinterSteps = state.winterSteps.setIn([state.currentWinterStep, 'current'], false);
      newWinterSteps = newWinterSteps.update(payload, step =>
        Object.assign({}, step, { current: true, completed: true })
      );

      return state.merge({ winterSteps: newWinterSteps, currentWinterStep: action.payload });

    case 'RESET_STEPS':
      return defaultState();
    default:
      return state;
  }
};

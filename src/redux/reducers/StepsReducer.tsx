import { List, Record } from 'immutable';
import { berthSteps, MAX_STEP, winterSteps } from '../../constants/StepConstant';
import { Action, StepsFactory, StepsState } from '../types';

const defaultState: StepsFactory = Record({
  berthSteps: List(berthSteps),
  winterSteps: List(winterSteps),
  currentBerthStep: 0,
  currentWinterStep: 0,
  boatTab: 0,
  applicantTab: 0
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

    case 'PREV_WINTER_STEP':
      if (state.currentWinterStep >= 0) {
        let prevWinterSteps = state.winterSteps.setIn([state.currentWinterStep, 'current'], false);
        prevWinterSteps = prevWinterSteps.setIn([state.currentWinterStep - 1, 'current'], true);

        return state.merge({
          berthSteps: prevWinterSteps,
          currentBerthStep: state.currentBerthStep - 1
        });
      }
      return state;

    case 'PREV_BERTH_STEP':
      if (state.currentBerthStep >= 0) {
        let prevBerthSteps = state.berthSteps.setIn([state.currentBerthStep, 'current'], false);
        prevBerthSteps = prevBerthSteps.setIn([state.currentBerthStep - 1, 'current'], true);

        return state.merge({
          berthSteps: prevBerthSteps,
          currentBerthStep: state.currentBerthStep - 1
        });
      }
      return state;

    case 'NEXT_WINTER_STEP':
      if (state.currentWinterStep < MAX_STEP) {
        let nextWinterSteps = state.winterSteps.setIn([state.currentWinterStep, 'current'], false);
        nextWinterSteps = nextWinterSteps.setIn([state.currentWinterStep + 1, 'current'], true);

        return state.merge({
          berthSteps: nextWinterSteps,
          currentBerthStep: state.currentBerthStep + 1
        });
      }
      return state;

    case 'NEXT_BERTH_STEP':
      if (state.currentBerthStep < MAX_STEP) {
        let nextBerthSteps = state.berthSteps.setIn([state.currentBerthStep, 'current'], false);
        nextBerthSteps = nextBerthSteps.setIn([state.currentBerthStep + 1, 'current'], true);

        return state.merge({
          berthSteps: nextBerthSteps,
          currentBerthStep: state.currentBerthStep + 1
        });
      }
      return state;

    case 'RESET_STEPS':
      return defaultState();
    default:
      return state;
  }
};

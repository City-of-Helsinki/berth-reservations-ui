import { Record } from 'immutable';

import { Action, BerthSwitchFactory, BerthSwitchProps, BerthSwitchState } from '../types';

const initState: BerthSwitchProps = {
  berth: null,
  pier: null,
  harbor: null,
  reason: null,
};
const defaultState: BerthSwitchFactory = Record(initState);

const BerthSwitchReducers = (state: BerthSwitchState = defaultState(), action: Action): BerthSwitchState => {
  const { type, payload } = action;

  switch (type) {
    case 'BERTH_SWITCH.SUBMIT_FORM':
      return state.merge({
        berth: payload.berth,
        pier: payload.pier,
        harbor: payload.harbor,
        reason: payload.reason,
      });
    case 'BERTH_SWITCH.RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};

export default BerthSwitchReducers;

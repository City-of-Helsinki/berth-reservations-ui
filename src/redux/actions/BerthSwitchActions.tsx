import { createAction } from 'redux-actions';

const resetBerthSwitch = createAction('BERTH_SWITCH.RESET_FORM');
const submitBerthSwitch = createAction('BERTH_SWITCH.SUBMIT_FORM');

export { resetBerthSwitch, submitBerthSwitch };

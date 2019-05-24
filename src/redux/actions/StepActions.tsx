import { createAction } from 'redux-actions';

const completeBerthStep = createAction('COMPLETE_BERTH_STEP');
const completeWinterStep = createAction('COMPLETE_WINTER_STEP');

export { completeBerthStep, completeWinterStep };

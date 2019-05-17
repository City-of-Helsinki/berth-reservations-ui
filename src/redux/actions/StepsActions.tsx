import { createAction } from 'redux-actions';

const generateSteps = createAction('GENERATE_STEPS');
const selectStep = createAction('SELECT_STEP');
const resetSteps = createAction('RESET_STEPS');

export { generateSteps, selectStep, resetSteps };

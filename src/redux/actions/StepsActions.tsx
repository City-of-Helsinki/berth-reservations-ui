import { createAction } from 'redux-actions';

const generateSteps = createAction('GENERATE_STEPS', (routeNames: string[], urlPrefix: string) => ({
  routeNames,
  urlPrefix
}));
const selectStep = createAction('SELECT_STEP');
const resetSteps = createAction('RESET_STEPS');

export { generateSteps, selectStep, resetSteps };

import { createAction } from 'redux-actions';

const generateSteps = createAction('GENERATE_STEPS', (routeNames: string[], urlPrefix: string) => ({
  routeNames,
  urlPrefix
}));
const completeStep = createAction('COMPLETE_STEP');
const resetSteps = createAction('RESET_STEPS');

export { generateSteps, completeStep, resetSteps };

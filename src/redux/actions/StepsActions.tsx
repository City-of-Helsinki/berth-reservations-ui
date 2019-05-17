import { createAction } from 'redux-actions';

export interface GenerateStepPayload {
  routeNames: string[];
  urlPrefix: string;
}

const generateSteps = createAction('GENERATE_STEPS', (payload: GenerateStepPayload) => payload);
const selectStep = createAction('SELECT_STEP');
const resetSteps = createAction('RESET_STEPS');

export { generateSteps, selectStep, resetSteps };

import { createAction } from 'redux-actions';

const switchApplication = createAction('APPLICATION.SWITCH_APPLICATION');
const resetApplication = createAction('APPLICATION.RESET_APPLICATION');
const submitApplicationForm = createAction('APPLICATION.SUBMIT_FORM');

export { switchApplication, resetApplication, submitApplicationForm };

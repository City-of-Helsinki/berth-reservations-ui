import { createAction } from 'redux-actions';

const switchApplication = createAction('APPLICATION.SWITCH_APPLICATION');
const resetApplication = createAction('APPLICATION.RESET_APPLICATION');

export { switchApplication, resetApplication };

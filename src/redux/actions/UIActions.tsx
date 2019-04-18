import { createAction } from 'redux-actions';

const switchApplication = createAction('UI.SWITCH_APPLICATION');
const resetApplication = createAction('UI.RESET_APPLICATION');

export { switchApplication, resetApplication };

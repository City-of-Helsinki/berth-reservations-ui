import { createAction } from 'redux-actions';

const switchApplication = createAction('UI.SWITCH_APPLICATION');
const resetApplication = createAction('UI.SWITCH_APPLICATION');

export { switchApplication, resetApplication };

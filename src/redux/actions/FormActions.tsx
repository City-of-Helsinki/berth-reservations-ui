import { createAction } from 'redux-actions';

const onSubmit = createAction('SUBMIT_FORM', (formData: {}) => formData);
const resetValues = createAction('RESET_FORM');

export { onSubmit, resetValues };

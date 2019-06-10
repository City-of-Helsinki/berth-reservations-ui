import { createAction } from 'redux-actions';

const onSubmitBerthForm = createAction('SUBMIT_BERTH_FORM', (formData: {}) => formData);
const onSubmitWinterForm = createAction('SUBMIT_WINTER_FORM', (formData: {}) => formData);

const resetValues = createAction('RESET_FORM');

export { onSubmitBerthForm, onSubmitWinterForm, resetValues };

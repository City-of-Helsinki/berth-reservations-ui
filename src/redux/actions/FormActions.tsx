import { createAction } from 'redux-actions';
import { BerthFormValues } from '../../types/berth';
import { WinterFormValues } from '../../types/winterStorage';

const onSubmitBerthForm = createAction(
  'SUBMIT_BERTH_FORM',
  (formData: BerthFormValues) => formData
);
const onSubmitWinterForm = createAction(
  'SUBMIT_WINTER_FORM',
  (formData: WinterFormValues) => formData
);

const resetValues = createAction('RESET_FORM');

export { onSubmitBerthForm, onSubmitWinterForm, resetValues };

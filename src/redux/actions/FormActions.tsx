import { createAction } from 'redux-actions';

import { BerthFormValues } from '../../features/berthApplication/types';
import { UnmarkedWinterFormValues } from '../../features/unmarkedWinterStorageApplication/types';
import { WinterFormValues } from '../../features/winterStorageApplication/types';

const onSubmitBerthForm = createAction('SUBMIT_BERTH_FORM', (formData: BerthFormValues) => formData);
const onSubmitWinterForm = createAction('SUBMIT_WINTER_FORM', (formData: WinterFormValues) => formData);
const onSubmitUnmarkedWinterForm = createAction(
  'SUBMIT_UNMARKED_WINTER_FORM',
  (formData: UnmarkedWinterFormValues) => formData
);

const resetValues = createAction('RESET_FORM');

export { onSubmitBerthForm, onSubmitWinterForm, onSubmitUnmarkedWinterForm, resetValues };

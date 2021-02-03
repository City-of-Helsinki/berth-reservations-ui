import { createAction } from 'redux-actions';

import { BerthFormValues } from '../../features/berth/types';
import { UnmarkedWinterFormValues } from '../../features/unmarkedWinterStorage/types';
import { WinterFormValues } from '../../features/winterStorage/types';

const onSubmitBerthForm = createAction('SUBMIT_BERTH_FORM', (formData: BerthFormValues) => formData);
const onSubmitWinterForm = createAction('SUBMIT_WINTER_FORM', (formData: WinterFormValues) => formData);
const onSubmitUnmarkedWinterForm = createAction(
  'SUBMIT_UNMARKED_WINTER_FORM',
  (formData: UnmarkedWinterFormValues) => formData
);

const resetValues = createAction('RESET_FORM');

export { onSubmitBerthForm, onSubmitWinterForm, onSubmitUnmarkedWinterForm, resetValues };

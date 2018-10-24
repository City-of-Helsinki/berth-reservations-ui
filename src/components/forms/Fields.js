import { injectIntl } from 'react-intl';
import InputField from './fields/InputField';
import CustomInputField from './fields/CustomInputField';
import MultiCustomInputField from './fields/MultiCustomInputField';
import InputGroupField from './fields/InputGroupField';

export const Text = injectIntl(InputField('text'));
export const Select = injectIntl(CustomInputField('select', false));
export const Checkbox = injectIntl(CustomInputField('checkbox', true));
export const Radio = injectIntl(CustomInputField('radio', true));
export const MultiCheckbox = injectIntl(MultiCustomInputField('checkbox'));
export const MultiRadio = injectIntl(MultiCustomInputField('radio'));
export const Number = InputGroupField('number');

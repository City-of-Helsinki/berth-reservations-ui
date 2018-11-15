import { injectIntl } from 'react-intl';
import { withProps } from 'recompose';
import InputField from './fields/InputField';
import DatePickerField from './fields/DatePickerField';
import CustomInputField from './fields/CustomInputField';
import MultiCustomInputField from './fields/MultiCustomInputField';
import InputGroupField from './fields/InputGroupField';

const mapNameAsId = withProps(({ id, name }) => ({ id: id || `form.${name}` }));

export const Text = mapNameAsId(injectIntl(InputField('text')));
export const DatePicker = mapNameAsId(injectIntl(DatePickerField()));
export const Select = mapNameAsId(injectIntl(CustomInputField('select', false)));
export const Checkbox = mapNameAsId(injectIntl(CustomInputField('checkbox', true)));
export const Radio = mapNameAsId(injectIntl(CustomInputField('radio', true)));
export const MultiCheckbox = mapNameAsId(injectIntl(MultiCustomInputField('checkbox')));
export const MultiRadio = mapNameAsId(injectIntl(MultiCustomInputField('radio')));
export const Number = mapNameAsId(InputGroupField('number'));

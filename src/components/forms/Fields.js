import { injectIntl } from 'react-intl';
import { withProps } from 'recompose';
import InputField from './fields/InputField';
import CustomInputField from './fields/CustomInputField';
import MultiCustomInputField from './fields/MultiCustomInputField';
import InputGroupField from './fields/InputGroupField';
import TextInput from './fields/TextInput';
import CustomInput from './fields/CustomInput';

const mapNameAsId = withProps(({ id, name }) => ({ id: id || `form.${name}` }));

export const Text = mapNameAsId(TextInput('text'));
export const Select = mapNameAsId(CustomInput('select'));
export const Checkbox = mapNameAsId(CustomInput('checkbox'));
export const Number = mapNameAsId(CustomInput('number'));
export const Radio = mapNameAsId(CustomInput('radio'));
export const MultiCheckbox = mapNameAsId(injectIntl(MultiCustomInputField('checkbox')));
export const MultiRadio = mapNameAsId(injectIntl(MultiCustomInputField('radio')));

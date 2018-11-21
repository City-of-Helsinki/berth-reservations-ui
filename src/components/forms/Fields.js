import { injectIntl } from 'react-intl';
import { withProps } from 'recompose';

import Input from './fields/Input';
import CustomInput from './fields/CustomInput';
import MultiInput from './fields/MultiInput';
import InputGroup from './fields/InputGroup';

const mapNameAsId = withProps(({ id, name }) => ({ id: id || `form.${name}` }));

export const Text = mapNameAsId(Input('text'));
export const Select = mapNameAsId(CustomInput('select'));
export const Checkbox = mapNameAsId(CustomInput('checkbox'));
export const Radio = mapNameAsId(CustomInput('radio'));
export const Number = mapNameAsId(InputGroup('number'));
export const MultiCheckbox = mapNameAsId(injectIntl(MultiInput('checkbox')));
export const MultiRadio = mapNameAsId(injectIntl(MultiInput('radio')));

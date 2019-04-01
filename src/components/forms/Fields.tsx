import { injectIntl } from 'react-intl';
import { withProps } from 'recompose';

import CustomInput from './fields/CustomInput';
import Input from './fields/Input';
import InputGroup from './fields/InputGroup';
import MultiInput from './fields/MultiInput';

const mapNameAsId = withProps(({ id, name }: any) => ({
  id: id || `form.${name}`
}));

export const Text = mapNameAsId(injectIntl(Input('text')));
export const Select = mapNameAsId(injectIntl(CustomInput('select', false)));
export const Checkbox = mapNameAsId(injectIntl(CustomInput('checkbox', true)));
export const Radio = mapNameAsId(injectIntl(CustomInput('radio', true)));
export const Number = mapNameAsId(injectIntl(InputGroup('text')));
export const MultiCheckbox = mapNameAsId(injectIntl(MultiInput('checkbox')));
export const MultiRadio = mapNameAsId(injectIntl(MultiInput('radio')));

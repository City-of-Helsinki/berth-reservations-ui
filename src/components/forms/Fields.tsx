import React from 'react';
import { withTranslation } from 'react-i18next';
import { withProps } from 'recompose';

import CustomInput from './fields/CustomInput';
import Input from './fields/Input';
import InputGroup from './fields/InputGroup';
import MultiInput from './fields/MultiInput';

const mapNameAsId = withProps(({ id, name }: any) => ({
  id: id || `form.${name}`,
}));

const wrap = (component: React.ComponentType<any>) => withTranslation()(mapNameAsId(component));

export const Text = wrap(Input('text'));
export const Select = wrap(CustomInput('select', false));
export const Checkbox = wrap(CustomInput('checkbox', true));
export const Radio = wrap(CustomInput('radio', true));
export const Number = wrap(
  InputGroup(
    'text',
    (locale) => (value) => value.replace(',', '.'),
    (locale) => (value) => (locale !== 'en' ? value.replace('.', ',') : value)
  )
);
export const MultiCheckbox = wrap(MultiInput('checkbox'));
export const MultiRadio = wrap(MultiInput('radio'));

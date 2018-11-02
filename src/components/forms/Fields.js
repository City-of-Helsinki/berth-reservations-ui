import React from 'react';
import { injectIntl } from 'react-intl';
import { withProps } from 'recompose';
import InputField from './fields/InputField';
import CustomInputField from './fields/CustomInputField';
import MultiCustomInputField from './fields/MultiCustomInputField';
import InputGroupField from './fields/InputGroupField';

const mapNameAsId = withProps(({ id, name }) => ({ id: id || `form.${name}` }));

export const Text = mapNameAsId(injectIntl(InputField('text')));
export const Select = mapNameAsId(injectIntl(CustomInputField('select', false)));
export const Checkbox = mapNameAsId(injectIntl(CustomInputField('checkbox', true)));
export const Radio = mapNameAsId(injectIntl(CustomInputField('radio', true)));
export const MultiCheckbox = mapNameAsId(injectIntl(MultiCustomInputField('checkbox')));
export const MultiRadio = mapNameAsId(injectIntl(MultiCustomInputField('radio')));
export const Number = mapNameAsId(InputGroupField('number'));

export const BigBoatTypeValue = 'big_boats';
export const BoatType = injectIntl(({ prefix, noValidate = false, intl: { formatMessage } }) => (
  <Select
    noValidate={noValidate}
    name={`${prefix}.type`}
    label="form.registered.field.type.label"
    required
  >
    <option>{formatMessage({ id: 'form.registered.field.type.placeholder' })}</option>
    <option value={BigBoatTypeValue}>a</option>
    <option>b</option>
    <option>c</option>
  </Select>
));

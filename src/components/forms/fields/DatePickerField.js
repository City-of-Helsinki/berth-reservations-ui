// @flow
import React from 'react';
import { type IntlShape } from 'react-intl';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import FormGroupField from './FormGroupField';
import { type DefaultFieldProps } from '../../../types/form';

export type InputFieldProps = DefaultFieldProps & {
  intl: IntlShape,
  placeholder?: string
};

const DatePickerField = ({
  intl: { formatMessage },
  placeholder,
  ...inputProps
}: InputFieldProps) => (
  <FormGroupField
    type="text"
    placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
    {...inputProps}
  >
    <SingleDatePicker
      onDateChange={() => console.log('moi')}
      onFocusChangee={() => console.log('moi')}
    />
  </FormGroupField>
);

export default DatePickerField;

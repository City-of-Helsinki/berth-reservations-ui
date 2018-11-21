// @flow
import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { type IntlShape } from 'react-intl';
import FormGroupField from './FormGroupField';

import { type DefaultFieldProps } from '../../../types/form';

export type InputFieldProps = DefaultFieldProps & {
  intl: IntlShape,
  placeholder?: string
};

const InputField = (type: string) => ({
  intl: { formatMessage },
  placeholder,
  ...inputProps
}: InputFieldProps) => (
  <FormGroup>
    <FormGroupField
      type={type}
      placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
      {...inputProps}
    >
      <Input />
    </FormGroupField>
  </FormGroup>
);

export default InputField;

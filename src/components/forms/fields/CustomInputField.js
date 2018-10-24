// @flow
import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';
import { type IntlShape } from 'react-intl';

import { type DefaultFieldProps } from '../../../types/form';

import FormGroupField from './FormGroupField';

export type CustomInputFieldProps = DefaultFieldProps & {
  intl: IntlShape
};

const CustomInputField = (type: string, inlineLabel: boolean) => ({
  intl: { formatMessage },
  id,
  label,
  children,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <FormGroupField id={id} label={inlineLabel ? undefined : label} type={type} {...inputProps}>
      <CustomInput
        id={id}
        type={type}
        label={inlineLabel ? formatMessage({ id: label }) : undefined}
      >
        {children}
      </CustomInput>
    </FormGroupField>
  </FormGroup>
);

export default CustomInputField;

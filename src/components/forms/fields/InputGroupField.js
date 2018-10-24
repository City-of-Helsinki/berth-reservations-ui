// @flow
import React from 'react';
import { FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import Label from './Label';
import FormGroupField from './FormGroupField';
import { type DefaultFieldProps } from '../../../types/form';

type InputGroupFieldProps = DefaultFieldProps & {
  prepend?: string,
  append?: string
};

const InputGroupField = (type: string) => ({
  id,
  required,
  label,
  prepend,
  append,
  ...inputProps
}: InputGroupFieldProps) => (
  <FormGroup>
    {label && <Label htmlFor={id} required={required || false} text={label} />}
    <InputGroup>
      <FormGroupField id={id} required={required} label="" type={type} {...inputProps}>
        {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
        <Input />
        {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
      </FormGroupField>
    </InputGroup>
  </FormGroup>
);

export default InputGroupField;

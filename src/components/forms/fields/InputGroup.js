// @flow
import React, { Fragment } from 'react';
import { Input, FormGroup, InputGroup, InputGroupAddon } from 'reactstrap';

import { FormGroupField, type InputFieldProps } from './InputField';
import Label from './Label';

type InputGroupFieldProps = InputFieldProps & {
  prepend: string,
  append: string
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
    <Label htmlFor={id} required={required} text={label} />
    <InputGroup>
      <FormGroupField id={id} required={required} label="" type={type} {...inputProps}>
        <Fragment>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
          <Input />
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
        </Fragment>
      </FormGroupField>
    </InputGroup>
  </FormGroup>
);

export default InputGroupField('number');

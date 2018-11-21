// @flow
import React from 'react';
import { FormGroup, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { Field } from 'react-final-form';

import Label from './Label';

const TextInput = type => ({ id, name, label, required }) => (
  <Field name={name} type={type}>
    {({ input, meta }) => (
      <FormGroup>
        <Label htmlFor={id} required={required} text={label || 'abs'} />
        <CustomInput id={id} type={type} label={label} {...input} />
        {meta.touched && meta.error && <FormFeedback>FormFeedback</FormFeedback>}
        <FormText>FormText</FormText>
      </FormGroup>
    )}
  </Field>
);

export default TextInput;

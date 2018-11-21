// @flow
import React from 'react';
import { FormGroup, Input, FormText, FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';

import Label from './Label';

const TextInput = type => ({ id, name, label, required, text, ...rest }) => (
  <Field name={name} type={type} required={required}>
    {({ input, meta }) => (
      <FormGroup>
        <Label htmlFor={id} required={required} text={label || 'abs'} />
        <Input {...input} {...rest} required={required} {...rest} />
        {meta.touched && meta.error && (
          <FormFeedback>
            <FormattedMessage id={meta.error} />
          </FormFeedback>
        )}
        {text && (
          <FormText>
            <FormattedMessage id={text} />
          </FormText>
        )}
      </FormGroup>
    )}
  </Field>
);

export default TextInput;

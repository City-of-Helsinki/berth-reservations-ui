// @flow
import React from 'react';
import { FormGroup, Input, FormText, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';

import Label from './Label';

const TextInput = type => ({ id, name, label, required, prepend, append, text, ...rest }) => (
  <Field name={name} type={type} required={required}>
    {({ input, meta }) => (
      <FormGroup>
        <Label htmlFor={id} required={required} text={label || 'abs'} />
        <InputGroup>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
          <Input {...input} required={required} {...rest} />
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
        </InputGroup>
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

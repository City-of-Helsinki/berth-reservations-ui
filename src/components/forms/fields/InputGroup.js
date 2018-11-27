// @flow
import React from 'react';
import { FormGroup, Input, FormText, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

const TextInput = (type: any) => ({
  id,
  name,
  label,
  required,
  prepend,
  append,
  text,
  noValidate,
  validate,
  placeholder,
  intl: { formatMessage },
  ...rest
}: any) => (
  <Field
    name={name}
    type={type}
    required={required}
    validate={noValidate ? undefined : validator(required ? mustBePresent : null, validate || null)}
  >
    {({ input, meta }) => (
      <FormGroup>
        {label && <Label htmlFor={id} required={required} text={label} />}
        <InputGroup>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
          <Input
            type={type}
            required={required}
            invalid={!!(meta.touched && meta.error)}
            placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
            {...input}
            {...rest}
          />
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}{' '}
          {meta.error && (
            <FormFeedback>
              <FormattedMessage id={meta.error} />
            </FormFeedback>
          )}
          {text && (
            <FormText>
              <FormattedMessage id={text} />
            </FormText>
          )}
        </InputGroup>
      </FormGroup>
    )}
  </Field>
);

export default TextInput;

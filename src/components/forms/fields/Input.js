// @flow
import React from 'react';
import { FormGroup, Input, FormText, FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

const TextInput = (type: any) => ({
  id,
  name,
  label,
  required,
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
    required={noValidate ? false : required}
    validate={noValidate ? undefined : validator(required ? mustBePresent : null, validate || null)}
  >
    {({ input, meta }) => (
      <FormGroup>
        {label && <Label htmlFor={id} required={noValidate ? false : required} text={label} />}
        <Input
          required={noValidate ? false : required}
          invalid={!!(meta.touched && meta.error)}
          placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
          type={type}
          {...input}
          {...rest}
        />
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
      </FormGroup>
    )}
  </Field>
);

export default TextInput;

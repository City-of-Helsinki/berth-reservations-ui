// @flow
import React from 'react';
import { FormGroup, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

const TextInput = (type, inlineLabel) => ({
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
}) => (
  <Field
    name={name}
    type={type}
    validate={noValidate ? undefined : validator(required ? mustBePresent : null, validate || null)}
  >
    {({ input, meta }) => (
      <FormGroup>
        {!inlineLabel && label && <Label htmlFor={id} required={required} text={label} />}
        <CustomInput
          id={id}
          type={type}
          placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
          label={inlineLabel ? formatMessage({ id: label }) : undefined}
          invalid={meta.touched && meta.error}
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
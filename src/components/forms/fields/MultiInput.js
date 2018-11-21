// @flow
import React from 'react';
import { FormGroup, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

const TextInput = type => ({
  id,
  name,
  label,
  required,
  items,
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
        {label && <Label htmlFor={id} required={required} text={label} />}
        {items.map(({ name: itemName, label: itemLabel, value: itemValue }) => {
          const key = `${id}_${itemName}_${itemValue}`;
          return (
            <CustomInput
              key={key}
              id={key}
              type={type}
              label={formatMessage({ id: itemLabel })}
              invalid={meta.touched && meta.error}
              {...input}
              {...rest}
            />
          );
        })}
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

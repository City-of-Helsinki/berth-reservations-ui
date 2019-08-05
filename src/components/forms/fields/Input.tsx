import React from 'react';
import { Field, FieldProps } from 'react-final-form';
import { FormattedMessage, InjectedIntlProps } from 'react-intl';
import { FormFeedback, FormGroup, FormText, Input } from 'reactstrap';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

type Props = FieldProps<string, HTMLElement> & InjectedIntlProps;

const TextInput = (type: 'text') => ({
  id,
  name,
  label,
  required,
  text,
  validate,
  placeholder,
  intl: { formatMessage },
  ...rest
}: Props) => (
  <Field
    name={name}
    type={type}
    required={required}
    validate={validator(required ? mustBePresent : null, validate || null)}
  >
    {({ input, meta }) => (
      <FormGroup>
        {label && <Label htmlFor={id} required={required} text={label} />}
        <Input
          required={required}
          invalid={!!(meta.touched && meta.error)}
          placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
          {...input}
          {...rest}
          type={type}
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

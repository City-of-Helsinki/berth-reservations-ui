import React from 'react';
import { Field, FieldProps } from 'react-final-form';
import { FormattedMessage, InjectedIntlProps } from 'react-intl';
import { FormFeedback, FormGroup, FormText } from 'reactstrap';
import validator, { mustBePresent } from '../../../utils/formValidation';
import Input from '../../common/Input';

import Label from './Label';

type Props = {
  items: Array<{ name: string; label: string; value: string }>;
} & FieldProps &
  InjectedIntlProps;

type CustomInputType = 'select' | 'file' | 'radio' | 'checkbox' | 'switch';

const TextInput = (type: CustomInputType, inlineLabel: boolean) => ({
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
        {!inlineLabel && label && <Label htmlFor={id} required={required} text={label} />}
        <Input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          label={inlineLabel ? label : undefined}
          invalid={!!(meta.touched && meta.error)}
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

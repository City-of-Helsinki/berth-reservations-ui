import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { WithTranslation } from 'react-i18next';
import { FormFeedback, FormGroup, FormText } from 'reactstrap';

import validator, { mustBePresent } from '../utils/formValidation';
import Input from '../input/Input';
import Label from './Label';

type Props = {
  items: { name: string; label: string; value: string }[];
} & WithTranslation &
  FieldRenderProps<string, HTMLInputElement>;

type CustomInputType = 'select' | 'file' | 'radio' | 'checkbox' | 'switch';

const CustomInput = (type: CustomInputType, inlineLabel: boolean) => ({
  t,
  id,
  name,
  label,
  required,
  text,
  validate,
  placeholder,
  tReady, // Excluded from 'rest'
  ...rest
}: Props) => {
  return (
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
            required={required}
            placeholder={placeholder}
            label={inlineLabel ? label : undefined}
            invalid={!!(meta.touched && meta.error)}
            {...input}
            {...rest}
            type={type}
          />
          {meta.error && (
            <FormFeedback>
              <span>{t(meta.error)}</span>
            </FormFeedback>
          )}
          {text && (
            <FormText>
              <span>{t(text)}</span>
            </FormText>
          )}
        </FormGroup>
      )}
    </Field>
  );
};

export default CustomInput;

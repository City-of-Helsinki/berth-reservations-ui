// @flow
import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { get } from 'lodash';
import { FormText, FormFeedback } from 'reactstrap';
import Label from './Label';

import { type DefaultFieldProps } from '../../../types/form';

type FormGroupFieldProps = DefaultFieldProps & {
  type: string
};

const FormGroupField = ({
  id,
  name,
  value,
  label,
  required,
  text,
  children,
  type,
  ...rest
}: FormGroupFieldProps) => (
  <Field name={name} type={type} value={value}>
    {({ input, meta }) => (
      <Fragment>
        {label && <Label htmlFor={id} required={required || false} text={label} />}
        {React.Children.map(children, child => {
          const childType = get(child, ['type', 'name']);

          if (childType === 'Input' || childType === 'CustomInput') {
            return React.cloneElement(child, {
              id,
              type,
              required,
              valid: meta.touched && meta.valid,
              invalid: meta.touched && meta.invalid,
              ...input,
              ...rest
            });
          }
          return child;
        })}
        {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
        {text && <FormText>{text}</FormText>}
      </Fragment>
    )}
  </Field>
);

export default FormGroupField;

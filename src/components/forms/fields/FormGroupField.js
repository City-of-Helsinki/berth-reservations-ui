// @flow
import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { get } from 'lodash';
import { FormText, FormFeedback } from 'reactstrap';
import { type IntlShape, injectIntl } from 'react-intl';
import Label from './Label';

import { type DefaultFieldProps } from '../../../types/form';

import validator, { mustBePresent } from '../../../utils/formValidation';

type FormGroupFieldProps = DefaultFieldProps & {
  type: string,
  intl: IntlShape
};

const FormGroupField = ({
  id,
  name,
  type,
  value,
  label,
  required,
  validate,
  text,
  children,
  intl: { formatMessage },
  ...rest
}: FormGroupFieldProps) => (
  <Field
    name={name}
    type={type}
    value={value}
    validate={validator(required && mustBePresent, validate && validate)}
  >
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
        {meta.touched &&
          meta.error && <FormFeedback>{formatMessage({ id: meta.error })}</FormFeedback>}
        {text && <FormText>{text}</FormText>}
      </Fragment>
    )}
  </Field>
);

export default injectIntl(FormGroupField);

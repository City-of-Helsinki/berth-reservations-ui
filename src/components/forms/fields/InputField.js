// @flow
import React, { type Node } from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Input, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, FormattedMessage, type IntlShape } from 'react-intl';
import Label from './Label';

export type InputFieldProps = {
  id: string,
  name: string,
  placeholder: string,
  text: string,
  intl: IntlShape,
  children: () => Node,
  label?: string,
  required: boolean
};

type ToggleFieldProps = {
  id: string,
  name: string,
  label: string,
  value: string,
  inline: boolean
};

const InputField = (type: string) => ({
  id,
  name,
  label,
  placeholder,
  text,
  children,
  required,
  intl: { formatMessage },
  ...inputProps
}: InputFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <FormGroup>
        {label && (
          <Label for={id} required={required}>
            <FormattedMessage id={label} />
          </Label>
        )}
        <Input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
          valid={meta.touched && meta.valid}
          invalid={meta.touched && meta.invalid}
          {...inputProps}
          {...input}
        >
          {children}
        </Input>
        {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
        {text && <FormText>{text}</FormText>}
      </FormGroup>
    )}
  </Field>
);

const ToggleField = (type: string) => ({
  id,
  name,
  label,
  value,
  inline,
  ...inputProps
}: ToggleFieldProps): any => (
  <Field name={name} type={type} value={value}>
    {({ input, meta }) => (
      <FormGroup check inline={inline}>
        <Label check>
          <Input
            id={id}
            type={type}
            valid={meta.touched && meta.valid}
            invalid={meta.touched && meta.invalid}
            {...inputProps}
            {...input}
          />
          <FormattedMessage id={label} />
        </Label>
        {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
      </FormGroup>
    )}
  </Field>
);

export const Text = injectIntl(InputField('text'));
export const Select = injectIntl(InputField('select'));
export const Checkbox = ToggleField('checkbox');
export const Radio = ToggleField('radio');

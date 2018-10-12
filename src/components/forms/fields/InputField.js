// @flow
import React, { type Node } from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import type { FormatMessage } from '../../../types/intl';

export type InputFieldProps = {
  id: string,
  name: string,
  label: string,
  placeholder: string,
  text: string,
  children: () => Node,
  intl: {
    formatMessage: FormatMessage
  }
};

type ToggleFieldProps = {
  id: string,
  name: string,
  label: string,
  inline: boolean
};

const InputField = (type: string) => ({
  id,
  name,
  label,
  placeholder,
  text,
  children,
  intl: { formatMessage },
  ...inputProps
}: InputFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <FormGroup>
        <Label for={id}>
          <FormattedMessage id={label} />
        </Label>
        <Input
          id={id}
          type={type}
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
  inline,
  ...inputProps
}: ToggleFieldProps): any => (
  <Field name={name}>
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

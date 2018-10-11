// @flow
import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const InputField = (type: string) => ({
  id,
  name,
  label,
  placeholder,
  feedback,
  text,
  children,
  intl: { formatMessage },
  ...inputProps
}: any) => (
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
          valid={meta.valid}
          invalid={meta.invalid}
          {...inputProps}
          {...input}
        >
          {children}
        </Input>
        {feedback && <FormFeedback>{feedback}</FormFeedback>}
        {text && <FormText>{text}</FormText>}
      </FormGroup>
    )}
  </Field>
);

const ToggleField = (type: string) => ({ id, name, label, ...inputProps }: any): any => (
  <Field name={name}>
    {({ input, meta }) => (
      <FormGroup check>
        <Label check>
          <Input
            id={id}
            type={type}
            valid={meta.valid}
            invalid={meta.invalid}
            {...inputProps}
            {...input}
          />{' '}
          <FormattedMessage id={label} />
        </Label>
      </FormGroup>
    )}
  </Field>
);

export const Text = injectIntl(InputField('text'));
export const Select = injectIntl(InputField('select'));
export const Checkbox = ToggleField('checkbox');
export const Radio = ToggleField('radio');

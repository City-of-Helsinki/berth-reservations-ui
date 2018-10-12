// @flow
import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { Input, Label, InputGroup, InputGroupAddon, FormFeedback, FormText } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

import type { InputFieldProps } from './InputField';

type InputGroupFieldProps = InputFieldProps & {
  prepend: string,
  append: string
};

const InputGroupField = (type: string) => ({
  id,
  name,
  label,
  placeholder,
  text,
  prepend,
  append,
  children,
  intl: { formatMessage },
  ...inputProps
}: InputGroupFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Fragment>
        <Label for={id}>
          <FormattedMessage id={label} />
        </Label>
        <InputGroup>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
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
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
          {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
          {text && <FormText>{text}</FormText>}
        </InputGroup>
      </Fragment>
    )}
  </Field>
);

export default injectIntl(InputGroupField('number'));

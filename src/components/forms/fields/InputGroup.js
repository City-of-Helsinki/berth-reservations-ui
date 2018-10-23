// @flow
import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { Input, InputGroup, InputGroupAddon, FormFeedback, FormText } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import Label from './Label';

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
  required,
  intl: { formatMessage },
  ...inputProps
}: InputGroupFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Fragment>
        <Label for={id} required={required} text={label} />
        <InputGroup>
          {prepend && <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>}
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
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
          {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
          {text && <FormText>{text}</FormText>}
        </InputGroup>
      </Fragment>
    )}
  </Field>
);

export default injectIntl(InputGroupField('number'));

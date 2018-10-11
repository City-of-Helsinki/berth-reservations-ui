// @flow
import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { Input, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const InputGroupField = (type: string) => ({
  id,
  name,
  label,
  placeholder,
  prepend,
  append,
  children,
  intl: { formatMessage },
  ...inputProps
}: any) => (
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
            valid={meta.valid}
            invalid={meta.invalid}
            {...inputProps}
            {...input}
          >
            {children}
          </Input>
          {append && <InputGroupAddon addonType="append">{append}</InputGroupAddon>}
        </InputGroup>
      </Fragment>
    )}
  </Field>
);

export default injectIntl(InputGroupField('number'));

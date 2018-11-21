// @flow
import React from 'react';
import { FormGroup, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';

import Label from './Label';

const TextInput = type => ({ id, name, label, required, items, text, ...rest }) => (
  <Field name={name} type={type}>
    {({ input, meta }) => (
      <FormGroup>
        <Label htmlFor={id} required={required} text={label || 'abs'} />
        {items.map(({ name: itemName, label: itemLabel, value: itemValue }) => {
          const key = `${id}_${itemName}_${itemValue}`;
          return (
            <CustomInput {...input} key={key} id={key} type={type} label={itemLabel} {...rest} />
          );
        })}
        {meta.touched && meta.error && (
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

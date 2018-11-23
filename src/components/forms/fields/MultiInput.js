// @flow
import React, { Fragment } from 'react';
import { FormGroup, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';
import validator, { mustBePresent } from '../../../utils/formValidation';

import Label from './Label';

const TextInput = (type: any) => ({
  id,
  name,
  label,
  required,
  items,
  text,
  noValidate,
  validate,
  placeholder,
  intl: { formatMessage },
  ...rest
}: any) => (
  <Fragment>
    <FormGroup>
      {label && <Label htmlFor={id} required={required} text={label} />}
      {items.map(({ name: itemName, label: itemLabel, value: itemValue }) => {
        const key = `${id}_${itemName}_${itemValue}`;
        return (
          <Field
            key={key}
            name={itemName}
            type={type}
            required={required}
            validate={
              noValidate ? undefined : validator(required ? mustBePresent : null, validate || null)
            }
          >
            {({ input, meta }) => (
              <CustomInput
                id={key}
                type={type}
                label={formatMessage({ id: itemLabel })}
                invalid={!!(meta.touched && meta.error)}
                {...input}
                {...rest}
              >
                {meta.error && (
                  <FormFeedback>
                    <FormattedMessage id={meta.error} />
                  </FormFeedback>
                )}
              </CustomInput>
            )}
          </Field>
        );
      })}
      {text && (
        <FormText>
          <FormattedMessage id={text} />
        </FormText>
      )}
    </FormGroup>
  </Fragment>
);

export default TextInput;

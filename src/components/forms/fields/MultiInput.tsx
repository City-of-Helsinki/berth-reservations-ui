import React, { Fragment } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { WithTranslation } from 'react-i18next';
import { CustomInput, FormFeedback, FormGroup, FormText } from 'reactstrap';

import validator, { mustBePresent } from '../../../utils/formValidation';
import Label from './Label';

type Props = {
  items: { name: string; label: string; value: string }[];
} & WithTranslation &
  FieldRenderProps<string, HTMLElement>;

type CustomInputType = 'select' | 'file' | 'radio' | 'checkbox' | 'switch';

const MultiInput = (type: CustomInputType) => ({
  t,
  id,
  name,
  label,
  required,
  items,
  text,
  validate,
  placeholder,
  tReady, // Excluded from 'rest'
  ...rest
}: Props) => {
  return (
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
              value={itemValue}
              validate={validator(required ? mustBePresent : null, validate || null)}
            >
              {({ input, meta }) => (
                <CustomInput
                  id={key}
                  required={required}
                  label={t(itemLabel)}
                  invalid={!!(meta.touched && meta.error)}
                  {...input}
                  {...rest}
                  type={type}
                >
                  {meta.error && (
                    <FormFeedback>
                      <span>{t(meta.error)}</span>
                    </FormFeedback>
                  )}
                </CustomInput>
              )}
            </Field>
          );
        })}
        {text && (
          <FormText>
            <span>{t(text)}</span>
          </FormText>
        )}
      </FormGroup>
    </Fragment>
  );
};

export default MultiInput;

// @flow
import React, { type Node, Fragment } from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Input, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, intlShape } from 'react-intl';
import Label from './Label';

type DefaultFieldProps = {
  id: string,
  name: string,
  value: string | number,
  label?: string,
  required?: boolean,
  text?: string,
  children?: Node
};

type FormGroupFieldProps = DefaultFieldProps & {
  type: string
};

export type InputFieldProps = DefaultFieldProps & {
  intl: intlShape,
  placeholder?: string
};

type CustomInputFieldProps = DefaultFieldProps & {
  intl: intlShape
};

type Items = {
  name: string,
  label: string,
  value: string
};

type MultiCustomInputFieldProps = CustomInputFieldProps & {
  items: Items
};

const FormGroupField = ({
  id,
  name,
  value,
  label,
  required,
  text,
  children,
  type,
  ...rest
}: FormGroupFieldProps) => (
  <Field name={name} type={type} value={value}>
    {({ input, meta }) => (
      <Fragment>
        {label && <Label htmlFor={id} required={required} text={label} />}
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            id,
            type,
            required,
            valid: meta.touched && meta.valid,
            invalid: meta.touched && meta.invalid,
            ...input,
            ...rest
          })
        )}
        {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
        {text && <FormText>{text}</FormText>}
      </Fragment>
    )}
  </Field>
);

const InputField = (type: string) => ({
  intl: { formatMessage },
  placeholder,
  ...inputProps
}: InputFieldProps) => (
  <FormGroup>
    <FormGroupField
      type={type}
      placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
      {...inputProps}
    >
      <Input />
    </FormGroupField>
  </FormGroup>
);

const CustomInputField = (type: string, inlineLabel: boolean) => ({
  intl: { formatMessage },
  id,
  label,
  children,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <FormGroupField id={id} label={inlineLabel || label} type={type} {...inputProps}>
      <CustomInput id={id} type={type} label={inlineLabel && formatMessage({ id: label })}>
        {children}
      </CustomInput>
    </FormGroupField>
  </FormGroup>
);

const MultiCustomInputField = (type: string) => ({
  intl: { formatMessage },
  id,
  required,
  label,
  items,
  ...inputProps
}: MultiCustomInputFieldProps): any => (
  <FormGroup>
    <Label htmlFor={id} required={required} text={label} />
    {items.map(({ name: itemName, label: itemLabel, value: itemValue }) => {
      const key = `${id}_${itemName}_${itemValue}`;
      return (
        <FormGroupField
          id={key}
          key={key}
          label=""
          name={itemName}
          required={required}
          value={itemValue}
          type={type}
          {...inputProps}
        >
          <CustomInput id={key} type={type} label={formatMessage({ id: itemLabel })} />
        </FormGroupField>
      );
    })}
  </FormGroup>
);

export const Text = injectIntl(InputField('text'));
export const Select = injectIntl(CustomInputField('select'));
export const Checkbox = injectIntl(CustomInputField('checkbox', true));
export const Radio = injectIntl(CustomInputField('radio', true));
export const MultiCheckbox = injectIntl(MultiCustomInputField('checkbox'));
export const MultiRadio = injectIntl(MultiCustomInputField('radio'));

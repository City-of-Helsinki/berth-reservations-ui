// @flow
import React, { type Node, Fragment } from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Input, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, intlShape } from 'react-intl';
import Label from './Label';

type FormGroupFieldProps = {
  id: string,
  name: string,
  type: string,
  label: string,
  placeholder: string,
  text: string,
  children: () => Node,
  intl: {
    formatMessage: FormatMessage
  },
  required?: boolean,
  text?: string,
  children?: Node
};

export type InputFieldProps = {
  intl: intlShape,
  children?: Node,
  placeholder?: string
};

type CustomInputFieldProps = {
  value: string
};

const FormGroupField = ({
  id,
  name,
  type,
  value,
  label,
  required,
  text,
  children,
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
  placeholder,
  intl: { formatMessage },
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

const CustomInputField = (type: string) => ({
  children,
  intl: { formatMessage },
  value,
  label,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <FormGroupField label={label} type={type} {...inputProps}>
      <CustomInput type={type} label={formatMessage({ id: label })} value={value}>
        {children}
      </CustomInput>
    </FormGroupField>
  </FormGroup>
);

const MultiCustomInputField = (type: string) => ({
  children,
  intl: { formatMessage },
  items,
  id,
  required,
  label,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <Label htmlFor={id} required={required} text={label} />
    {items.map(({ name: itemName, label: itemLabel, value: itemValue }) => (
      <FormGroupField
        key={`${id}_${itemName}`}
        label=""
        id={id}
        required={required}
        type={type}
        {...inputProps}
      >
        <CustomInput
          name={itemName}
          type={type}
          id={`${id}_${itemName}`}
          label={formatMessage({ id: itemLabel })}
          value={itemValue}
        />
      </FormGroupField>
    ))}
  </FormGroup>
);

export const Text = injectIntl(InputField('text'));
export const Select = injectIntl(CustomInputField('select'));
export const Checkbox = injectIntl(CustomInputField('checkbox'));
export const Radio = injectIntl(CustomInputField('radio'));
export const MultiCheckbox = injectIntl(MultiCustomInputField('checkbox'));
export const MultiRadio = injectIntl(MultiCustomInputField('radio'));

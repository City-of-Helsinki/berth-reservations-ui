// @flow
import React, { type Node, Fragment } from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Input, CustomInput, FormText, FormFeedback } from 'reactstrap';
import { injectIntl, type IntlShape } from 'react-intl';
import Label from './Label';

export type DefaultFieldProps = {
  id: string,
  name: string,
  value?: string | number,
  label?: string,
  required?: boolean,
  text?: string,
  children?: Node
};

export type InputFieldProps = DefaultFieldProps & {
  intl: IntlShape,
  placeholder?: string
};

type CustomInputFieldProps = DefaultFieldProps & {
  intl: IntlShape
};

type MultiCustomInputFieldProps = CustomInputFieldProps & {
  items: Array<{
    name: string,
    label: string,
    value: string
  }>
};

type FormGroupFieldProps = DefaultFieldProps & {
  type: string
};

export const FormGroupField = ({
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
        {label && <Label htmlFor={id} required={required || false} text={label} />}
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
    <FormGroupField id={id} label={inlineLabel ? undefined : label} type={type} {...inputProps}>
      <CustomInput
        id={id}
        type={type}
        label={inlineLabel ? formatMessage({ id: label }) : undefined}
      >
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
    {label && <Label htmlFor={id} required={required || false} text={label} />}
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
export const Select = injectIntl(CustomInputField('select', false));
export const Checkbox = injectIntl(CustomInputField('checkbox', true));
export const Radio = injectIntl(CustomInputField('radio', true));
export const MultiCheckbox = injectIntl(MultiCustomInputField('checkbox'));
export const MultiRadio = injectIntl(MultiCustomInputField('radio'));

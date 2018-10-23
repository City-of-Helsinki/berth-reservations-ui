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
  children,
  ...inputProps
}: InputFieldProps) => (
  <FormGroup>
    <FormGroupField
      type={type}
      placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
      {...inputProps}
    >
      <Input>{children}</Input>
    </FormGroupField>
  </FormGroup>
);

const CustomInputField = (type: string) => ({
  children,
  value,
  label,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <FormGroupField label={label} type={type} {...inputProps}>
      <CustomInput type={type} label={label} value={value}>
        {children}
      </CustomInput>
    </FormGroupField>
  </FormGroup>
);

const MultiCustomInputField = (type: string) => ({
  children,
  items,
  id,
  required,
  label,
  ...inputProps
}: CustomInputFieldProps): any => (
  <FormGroup>
    <Label htmlFor={id} required={required} text={label} />
    {Object.entries(items).map(([value, item]) => (
      <FormGroupField label="" id={id} required={required} type={type} {...inputProps}>
        <CustomInput type={type} id={item} key={value} label={item} value={value} {...inputProps} />
      </FormGroupField>
    ))}
  </FormGroup>
);

export const Text = injectIntl(InputField('text'));
export const Select = CustomInputField('select');
export const Checkbox = CustomInputField('checkbox');
export const Radio = CustomInputField('radio');
export const MultiCheckbox = MultiCustomInputField('checkbox');
export const MultiRadio = MultiCustomInputField('radio');

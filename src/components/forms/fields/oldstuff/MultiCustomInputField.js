// @flow
import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';
import Label from './Label';
import FormGroupField from './FormGroupField';
import { type CustomInputFieldProps } from './CustomInputField';

type MultiCustomInputFieldProps = CustomInputFieldProps & {
  items: Array<{
    name: string,
    label: string,
    value: string
  }>
};

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

export default MultiCustomInputField;

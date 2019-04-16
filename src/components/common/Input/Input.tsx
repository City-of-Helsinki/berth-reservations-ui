import classNames from 'classnames';
import React, { FC } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { CustomInput as BTInput, CustomInputProps as BTInputProps } from 'reactstrap';

import './Input.scss';

export type InputProps = BTInputProps & InjectedIntlProps;

export const Input: FC<InputProps> = ({
  className,
  type = 'checkbox',
  placeholder,
  label,
  intl: { formatMessage },
  ...rest
}) => {
  return (
    <BTInput
      id="vene-input-field"
      className={classNames('vene-input', className)}
      type={type}
      label={label ? formatMessage({ id: label as string }) : ''}
      placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
      {...rest}
    />
  );
};

export default injectIntl(Input);

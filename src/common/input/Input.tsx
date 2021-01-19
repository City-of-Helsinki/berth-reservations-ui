import classNames from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomInput as BTInput, CustomInputProps as BTInputProps } from 'reactstrap';

import './input.scss';

export type InputProps = BTInputProps;

const Input: FC<InputProps> = ({ className, type, placeholder, label, ...rest }) => {
  const { t } = useTranslation();

  return (
    <BTInput
      className={classNames('vene-input', className)}
      type={type}
      label={typeof label === 'string' ? t(label) : label}
      placeholder={placeholder ? t(placeholder) : ''}
      {...rest}
    />
  );
};

export default Input;

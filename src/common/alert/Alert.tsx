import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert as BTAlert, AlertProps as BTAlertProps } from 'reactstrap';
import './alert.scss';

export type AlertProps = BTAlertProps & {
  messageId: string;
};

const Alert = ({ color, className, messageId, ...rest }: AlertProps) => {
  const { t } = useTranslation();

  return (
    <BTAlert className={classNames('vene-alert', className)} color={color} {...rest}>
      {t(messageId)}
    </BTAlert>
  );
};

export default Alert;

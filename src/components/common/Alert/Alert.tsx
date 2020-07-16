import classNames from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert as BTAlert, AlertProps as BTAlertProps } from 'reactstrap';
import './Alert.scss';

export type AlertProps = BTAlertProps & {
  messageId: string;
};

const Alert: FC<AlertProps> = ({ color, className, messageId, ...rest }) => {
  const { t } = useTranslation();

  return (
    <BTAlert className={classNames('vene-alert', className)} color={color} {...rest}>
      {t(messageId)}
    </BTAlert>
  );
};

export default Alert;

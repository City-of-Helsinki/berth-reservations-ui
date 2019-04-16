import classNames from 'classnames';
import React, { FC } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert as BTAlert, AlertProps as BTAlertProps } from 'reactstrap';
import './Alert.scss';

export type AlertProps = BTAlertProps &
  InjectedIntlProps & {
    messageId: string;
  };

const Alert: FC<AlertProps> = ({
  color,
  className,
  intl: { formatMessage },
  messageId,
  ...rest
}) => {
  return (
    <BTAlert className={classNames('vene-alert', className)} color={color} {...rest}>
      {formatMessage({ id: messageId })}
    </BTAlert>
  );
};

export default injectIntl(Alert);

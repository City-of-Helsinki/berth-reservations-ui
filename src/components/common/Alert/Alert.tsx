import classNames from 'classnames';
import React, { FC } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert as BTAlert, AlertProps as BTAlertProps } from 'reactstrap';

export type AlertProps = BTAlertProps &
  InjectedIntlProps & {
    messageId: string;
  };

const Alert: FC<AlertProps> = ({ color, className, intl: { formatMessage }, messageId }) => {
  return (
    <BTAlert className={classNames('vene-alert', className)} color={color}>
      {formatMessage({ id: messageId })}
    </BTAlert>
  );
};

export default injectIntl(Alert);

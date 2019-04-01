import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

type Props = {
  Component: React.FC;
  id: string;
  [propName: string]: unknown;
} & InjectedIntlProps;

const IntlComponent = ({ Component, id, intl: { formatMessage }, ...rest }: Props) => (
  <Component {...rest}>{formatMessage({ id })}</Component>
);

export default injectIntl(IntlComponent);

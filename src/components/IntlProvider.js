// @flow
import React, { type Node } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../config/translations';

type Props = {
  locale: string,
  children: Node
};

export default ({ locale, children }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);

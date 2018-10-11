// @flow
import React, { type Node } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import englishLocaleData from 'react-intl/locale-data/en';
import finnishLocaleData from 'react-intl/locale-data/fi';
import swedishLocaleData from 'react-intl/locale-data/sv';

import fi from '../translations/fi.json';
import en from '../translations/en.json';
import sv from '../translations/sv.json';

const messages = { fi, en, sv };

addLocaleData(finnishLocaleData);
addLocaleData(englishLocaleData);
addLocaleData(swedishLocaleData);

type Props = {
  locale: string,
  children: Node
};

const Internationalized = ({ locale, children }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);

export default Internationalized;

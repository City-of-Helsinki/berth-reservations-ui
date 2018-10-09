import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import englishLocaleData from 'react-intl/locale-data/en';
import finnishLocaleData from 'react-intl/locale-data/fi';
import swedishLocaleData from 'react-intl/locale-data/sv';

const messages = {
  fi: require('../translations/fi.json'),
  en: require('../translations/en.json'),
  sv: require('../translations/sv.json'),
};

[
  englishLocaleData,
  finnishLocaleData,
  swedishLocaleData,
].forEach(addLocaleData);

const Internationalized = ({ locale, children }) => {
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Internationalized;

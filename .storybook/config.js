import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import messages from '../src/config/translations';
import theme from '../src/config/theme';

import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

const locale = 'fi';

function loadStories() {
  addDecorator(stories => (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>{stories()}</ThemeProvider>
    </IntlProvider>
  ));
  const req = require.context('../stories', true, /story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);

import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import ThemeProvider from '../src/components/ThemeProvider';
import IntlProvider from '../src/components/IntlProvider';

function loadStories() {
  addDecorator(stories => (
    <IntlProvider locale="fi">
      <ThemeProvider>{stories()}</ThemeProvider>
    </IntlProvider>
  ));
  const req = require.context('../stories', true, /story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);

import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import ThemeProvider from '../src/components/ThemeProvider';
import Internationalized from '../src/components/Internationalized';

function loadStories() {
  addDecorator(stories => (
    <Internationalized locale="fi">
      <ThemeProvider>{stories()}</ThemeProvider>
    </Internationalized>
  ));
  const req = require.context('../stories', true, /story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);

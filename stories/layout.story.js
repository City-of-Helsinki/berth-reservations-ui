import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '../src/components/layout/Footer';
import { router } from './decorators';

storiesOf('Layout', module)
  .addDecorator(router)
  .add('Footer', () => <Footer />);

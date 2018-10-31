import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Footer from '../src/components/layout/Footer';

storiesOf('Layout', module)
  .addDecorator(StoryRouter())
  .add('Footer', () => <Footer />);

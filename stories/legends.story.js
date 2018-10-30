import React from 'react';
import { storiesOf } from '@storybook/react';

import FormLegend from '../src/components/legends/FormLegend';
import ThankYouLegend from '../src/components/legends/ThankYouLegend';

storiesOf('Legends/Form', module)
  .add('berths', () => <FormLegend step={0} />)
  .add('boat', () => <FormLegend step={1} />)
  .add('person', () => <FormLegend step={2} />)
  .add('overview', () => <FormLegend step={3} />);

storiesOf('Legends/ThankYou', module).add('default', () => <ThankYouLegend />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegisteredBoat from '../src/components/forms/RegisteredBoat';
import BigShips from '../src/components/forms/BigShips';

storiesOf('Forms', module)
  .add('RegisteredBoat', () => <RegisteredBoat onSubmit={action('Submit')} />)
  .add('BigShips', () => <BigShips onSubmit={action('Submit')} />);

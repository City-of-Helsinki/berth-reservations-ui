import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegisteredBoat from '../src/components/forms/RegisteredBoat';
import BigShips from '../src/components/forms/BigShips';
import UnRegisteredBoat from '../src/components/forms/UnRegisteredBoat';
import NoBoat from '../src/components/forms/NoBoat';
import PrivatePerson from '../src/components/forms/PrivatePerson';

storiesOf('Forms', module)
  .add('RegisteredBoat', () => <RegisteredBoat onSubmit={action('Submit')} />)
  .add('BigShips', () => <BigShips onSubmit={action('Submit')} />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat onSubmit={action('Submit')} />)
  .add('NoBoat', () => <NoBoat onSubmit={action('Submit')} />)
  .add('PrivatePerson', () => <PrivatePerson onSubmit={action('Submit')} />);

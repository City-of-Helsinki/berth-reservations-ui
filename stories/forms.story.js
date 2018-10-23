import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegisteredBoat from '../src/components/forms/RegisteredBoat';
import UnRegisteredBoat from '../src/components/forms/UnRegisteredBoat';
import NoBoat from '../src/components/forms/NoBoat';
import PrivatePerson from '../src/components/forms/PrivatePerson';
import Overview from '../src/components/forms/Overview';

storiesOf('Forms', module)
  .add('RegisteredBoat', () => <RegisteredBoat onSubmit={action('Submit')} />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat onSubmit={action('Submit')} />)
  .add('NoBoat', () => <NoBoat onSubmit={action('Submit')} />)
  .add('PrivatePerson', () => <PrivatePerson onSubmit={action('Submit')} />)
  .add('Overview', () => <Overview onSubmit={action('Submit')} />);

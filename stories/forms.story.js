import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BigShips from '../src/components/forms/fragments/BigShips';
import Overview from '../src/components/forms/fragments/Overview';
import RegisteredBoat from '../src/components/forms/fragments/RegisteredBoat';
import UnRegisteredBoat from '../src/components/forms/fragments/UnRegisteredBoat';
import NoBoat from '../src/components/forms/fragments/NoBoat';
import PrivatePerson from '../src/components/forms/fragments/PrivatePerson';
import Form from '../src/components/forms/Form';

storiesOf('Forms/Fragments', module)
  .addDecorator(storyFn => <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>)
  .add('BigShips', () => <BigShips />)
  .add('Overview', () => <Overview />)
  .add('RegisteredBoat', () => <RegisteredBoat />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat />)
  .add('NoBoat', () => <NoBoat />)
  .add('PrivatePerson', () => <PrivatePerson />);

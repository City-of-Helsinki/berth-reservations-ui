import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';

import BigShips from '../src/components/forms/fragments/BigShips';
import Company from '../src/components/forms/fragments/Company';
import Overview from '../src/components/forms/fragments/Overview';
import RegisteredBoat from '../src/components/forms/fragments/RegisteredBoat';
import UnRegisteredBoat from '../src/components/forms/fragments/UnRegisteredBoat';
import NoBoat from '../src/components/forms/fragments/NoBoat';
import PrivatePerson from '../src/components/forms/fragments/PrivatePerson';
import Form from '../src/components/forms/Form';

storiesOf('Forms/Fragments', module)
  .addDecorator(storyFn => (
    <Container fluid>
      <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>
    </Container>
  ))
  .add('BigShips', () => <BigShips />)
  .add('Overview', () => <Overview />)
  .add('Company', () => <Company />)
  .add('RegisteredBoat', () => <RegisteredBoat />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat />)
  .add('NoBoat', () => <NoBoat />)
  .add('PrivatePerson', () => <PrivatePerson />);

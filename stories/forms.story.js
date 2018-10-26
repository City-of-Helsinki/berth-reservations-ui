import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';

import Form from '../src/components/forms/Form';
import BigShips from '../src/components/forms/fragments/BigShips';
import Company from '../src/components/forms/fragments/Company';
import ContactDetails from '../src/components/forms/fragments/ContactDetails';
import FullName from '../src/components/forms/fragments/FullName';
import NoBoat from '../src/components/forms/fragments/NoBoat';
import Overview from '../src/components/forms/fragments/Overview';
import PostalDetails from '../src/components/forms/fragments/PostalDetails';
import PrivatePerson from '../src/components/forms/fragments/PrivatePerson';
import RegisteredBoat from '../src/components/forms/fragments/RegisteredBoat';
import RegistrationAdditionalInfo from '../src/components/forms/fragments/RegistrationAdditionalInfo';
import UnRegisteredBoat from '../src/components/forms/fragments/UnRegisteredBoat';

storiesOf('Forms/Fragments', module)
  .addDecorator(storyFn => (
    <Container fluid>
      <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>
    </Container>
  ))
  .add('BigShips', () => <BigShips />)
  .add('Company', () => <Company />)
  .add('ContactDetails', () => <ContactDetails />)
  .add('FullName', () => <FullName />)
  .add('NoBoat', () => <NoBoat />)
  .add('Overview', () => <Overview />)
  .add('PostalDetails', () => <PostalDetails />)
  .add('RegisteredBoat', () => <RegisteredBoat />)
  .add('RegistrationAdditionalInfo', () => <RegistrationAdditionalInfo />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat />)
  .add('PrivatePerson', () => <PrivatePerson />);

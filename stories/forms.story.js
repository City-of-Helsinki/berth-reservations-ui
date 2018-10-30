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

const OverviewData = {
  registered_boat: {
    register_number: '153945839',
    type: 'b',
    width: '3',
    length: '10',
    depth: '3',
    weight: '25000',
    boat_name: 'RMS Titanic',
    boat_model: 'Uppoava'
  },
  person: {},
  overview: {},
  private_person: {
    first_name: 'Loso',
    last_name: 'Lamantiini',
    street_address: 'Saarijärventie 1',
    postal_code: '05400',
    munacipality: 'Helsinki',
    mobile_phone: '+3581231234567',
    email: 'luslus@manateez.com'
  }
};

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
  .add('Overview', () => <Overview values={OverviewData} />)
  .add('PostalDetails', () => <PostalDetails />)
  .add('RegisteredBoat', () => <RegisteredBoat />)
  .add('RegistrationAdditionalInfo', () => <RegistrationAdditionalInfo />)
  .add('UnRegisteredBoat', () => <UnRegisteredBoat />)
  .add('PrivatePerson', () => <PrivatePerson />);

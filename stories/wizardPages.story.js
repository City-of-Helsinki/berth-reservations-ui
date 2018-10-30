import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';

import Form from '../src/components/forms/Form';
import ApplicantDetailsPage from '../src/components/forms/pages/ApplicantDetails';
import BoatDetailsPage from '../src/components/forms/pages/BoatDetails';
import SubmitPage from '../src/components/forms/pages/Submit';

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

const privatePerson = { select_form_type: { applicant_details: 'private_person' } };
const company = { select_form_type: { applicant_details: 'company' } };
const registeredBoat = { select_form_type: { boat_details: 'registered_boat' } };
const bigShips = {
  select_form_type: { boat_details: 'registered_boat' },
  boat: { type: 'bigboat' }
};
const unregisteredBoat = { select_form_type: { boat_details: 'unregistered_boat' } };
const noBoat = { select_form_type: { boat_details: 'no_boat' } };

storiesOf('Forms/Pages', module)
  .addDecorator(storyFn => (
    <Container fluid>
      <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>
    </Container>
  ))
  .add('privatePerson', () => <ApplicantDetailsPage values={privatePerson} />)
  .add('company', () => <ApplicantDetailsPage values={company} />)
  .add('registeredBoat', () => <BoatDetailsPage values={registeredBoat} />)
  .add('bigShips', () => <BoatDetailsPage values={bigShips} />)
  .add('unregisteredBoat', () => <BoatDetailsPage values={unregisteredBoat} />)
  .add('noBoat', () => <BoatDetailsPage values={noBoat} />)
  .add('submit', () => <SubmitPage values={OverviewData} />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';

import Form from '../src/components/forms/Form';
import { BigBoatTypeValue } from '../src/components/forms/Fields';
import ApplicantDetailsPage from '../src/components/forms/sections/ApplicantDetails';
import BoatDetailsPage from '../src/components/forms/sections/BoatDetails';
import OverviewPage from '../src/components/forms/sections/Overview';
import { developmentValues } from '../src/ducks/mocks/forms';

const privatePerson = { select_form_type: { applicant_details: 'private_person' } };
const company = { select_form_type: { applicant_details: 'company' } };
const registeredBoat = { select_form_type: { boat_details: 'registered_boat' } };
const bigShips = {
  select_form_type: { boat_details: 'registered_boat' },
  boat: { type: BigBoatTypeValue }
};
const unregisteredBoat = { select_form_type: { boat_details: 'unregistered_boat' } };
const noBoat = { select_form_type: { boat_details: 'no_boat' } };

storiesOf('Forms/Sections', module)
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
  .add('overview', () => <OverviewPage values={developmentValues} />);

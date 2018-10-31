import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'reactstrap';

import Form from '../src/components/forms/Form';
import { BigBoatTypeValue } from '../src/components/forms/Fields';
import ApplicantDetailsPage from '../src/components/forms/sections/ApplicantDetails';
import BoatDetailsPage from '../src/components/forms/sections/BoatDetails';
import OverviewPage from '../src/components/forms/sections/Overview';
import { developmentValues } from '../src/ducks/defaultStates/forms';

const privatePerson = { sections: { applicant: 'private_person' } };
const company = { sections: { applicant: 'company' } };
const registeredBoat = { sections: { boat: 'registered_boat' } };
const bigShips = {
  sections: { boat: 'registered_boat' },
  boat: { type: BigBoatTypeValue }
};
const unregisteredBoat = { sections: { boat: 'unregistered_boat' } };
const noBoat = { sections: { boat: 'no_boat' } };

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

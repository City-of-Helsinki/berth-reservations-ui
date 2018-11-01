import React from 'react';
import { storiesOf } from '@storybook/react';
import { BigBoatTypeValue } from '../src/components/forms/Fields';
import ApplicantDetailsPage from '../src/components/forms/sections/ApplicantDetails';
import BoatDetailsPage from '../src/components/forms/sections/BoatDetails';
import OverviewPage from '../src/components/forms/sections/Overview';
import { developmentValues } from '../src/ducks/defaultStates/forms';

import { form } from './decorators';

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
  .addDecorator(form)
  .add('privatePerson', () => <ApplicantDetailsPage values={privatePerson} />)
  .add('company', () => <ApplicantDetailsPage values={company} />)
  .add('registeredBoat', () => <BoatDetailsPage values={registeredBoat} />)
  .add('bigShips', () => <BoatDetailsPage values={bigShips} />)
  .add('unregisteredBoat', () => <BoatDetailsPage values={unregisteredBoat} />)
  .add('noBoat', () => <BoatDetailsPage values={noBoat} />)
  .add('overview', () => <OverviewPage values={developmentValues} />);

import React from 'react';
import { storiesOf } from '@storybook/react';

import Accessibility from '../src/components/forms/fragments/Accessibility';
import BigShips from '../src/components/forms/fragments/BigShips';
import BoatInfo from '../src/components/forms/fragments/BoatInfo';
import BoatMeasures from '../src/components/forms/fragments/BoatMeasures';
import CompanyDetails from '../src/components/forms/fragments/CompanyDetails';
import ContactBy from '../src/components/forms/fragments/ContactBy';
import ContactDetails from '../src/components/forms/fragments/ContactDetails';
import FullName from '../src/components/forms/fragments/FullName';
import Newsletter from '../src/components/forms/fragments/Newsletter';
import PostalDetails from '../src/components/forms/fragments/PostalDetails';
import RegisteredBoatDetails from '../src/components/forms/fragments/RegisteredBoatDetails';
import UnRegisteredBoatDetails from '../src/components/forms/fragments/UnRegisteredBoatDetails';

import { form } from './decorators';

storiesOf('Forms/Fragments', module)
  .addDecorator(form)
  .add('Accessibility', () => <Accessibility />)
  .add('BigShips', () => <BigShips />)
  .add('BoatInfo', () => <BoatInfo />)
  .add('BoatMeasures', () => <BoatMeasures />)
  .add('CompanyDetails', () => <CompanyDetails />)
  .add('ContactBy', () => <ContactBy />)
  .add('ContactDetails', () => <ContactDetails />)
  .add('FullName', () => <FullName />)
  .add('Newsletter', () => <Newsletter />)
  .add('PostalDetails', () => <PostalDetails />)
  .add('RegisteredBoatDetails', () => <RegisteredBoatDetails />)
  .add('UnRegisteredBoatDetails', () => <UnRegisteredBoatDetails />);

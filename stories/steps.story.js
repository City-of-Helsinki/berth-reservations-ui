import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from '../src/components/steps/Steps';
import Step from '../src/components/steps/Step';

import { router } from './decorators';

const tabs = ['berths', 'boat_information', 'applicant', 'send_application'];

const getStepDetails = step => [
  {
    key: 'berths',
    completed: step > -1,
    current: step === -1,
    linkTo: `berths`
  },
  {
    key: 'boat_information',
    completed: step > 0,
    current: step === 0,
    linkTo: step > 0 ? `form/${tabs[0]}` : undefined
  },
  {
    key: 'applicant',
    completed: step > 1,
    current: step === 1,
    linkTo: step > 1 ? `form/${tabs[1]}` : undefined
  },
  {
    key: 'send_application',
    completed: step > 2,
    current: step === 2,
    linkTo: step > 2 ? `form/${tabs[2]}` : undefined
  }
];

storiesOf('Steps', module)
  .addDecorator(router)
  .add('First', () => <Steps steps={getStepDetails(0)} />)
  .add('Second', () => <Steps steps={getStepDetails(1)} />)
  .add('Third', () => <Steps steps={getStepDetails(2)} />)
  .add('Forth', () => <Steps steps={getStepDetails(3)} />);
storiesOf('Steps/Step', module)
  .add('Inactive', () => <Step label="None" />)
  .add('Current', () => <Step current label="Current" />)
  .add('Completed', () => <Step completed label="Completed" />);

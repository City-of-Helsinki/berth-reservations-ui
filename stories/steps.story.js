import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from '../src/components/steps/Steps';
import Step from '../src/components/steps/Step';

storiesOf('Steps', module)
  .add('First', () => <Steps step={0} />)
  .add('Second', () => <Steps step={1} />)
  .add('Third', () => <Steps step={2} />)
  .add('Forth', () => <Steps step={3} />)
  .add('done', () => <Steps done />);
storiesOf('Steps/Step', module)
  .add('Inactive', () => <Step label="None" />)
  .add('Current', () => <Step current label="Current" />)
  .add('Completed', () => <Step completed label="Completed" />);

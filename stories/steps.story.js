import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from '../src/components/Steps';
import Step from '../src/components/Step';

storiesOf('Steps', module)
  .add('First', () => <Steps step={1} />)
  .add('Second', () => <Steps step={2} />)
  .add('Third', () => <Steps step={3} />)
  .add('Forth', () => <Steps step={4} />)
  .add('done', () => <Steps done />);
storiesOf('Steps/Step', module)
  .add('Inactive', () => <Step label="None" />)
  .add('Current', () => <Step current label="Current" />)
  .add('Complited', () => <Step completed label="Completed" />);

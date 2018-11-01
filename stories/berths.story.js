import React from 'react';
import { storiesOf } from '@storybook/react';

import BerthsOnMap from '../src/components/berths/BerthsOnMap';
import ListBerths from '../src/components/berths/ListBerths';
import SelectedBerths from '../src/components/berths/SelectedBerths';
import { form } from './decorators';

import berths from './berths';

const selectedBerths = berths.slice(0, 3).map(berth => berth.id);

storiesOf('berths', module)
  .addDecorator(form)
  .add('BerthsOnMap', () => <BerthsOnMap berths={berths} />)
  .add('ListBerths', () => <ListBerths berths={berths} />)
  .add('SelectedBerths', () => <SelectedBerths berths={berths} selected={selectedBerths} />);

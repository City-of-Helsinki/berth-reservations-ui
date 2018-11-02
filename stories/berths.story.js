import React from 'react';
import { storiesOf } from '@storybook/react';

import BerthsOnMap from '../src/components/berths/BerthsOnMap';
import Berths from '../src/components/berths/Berths';
import SelectedBerths from '../src/components/berths/SelectedBerths';
import Berth from '../src/components/berths/Berth';
import SelectedBerth from '../src/components/berths/SelectedBerth';

import berths from './berths';

const selectedBerths = berths.slice(0, 3).map(berth => berth.id);

storiesOf('Berths/Components', module)
  .add('Berth', () => <Berth berth={berths[0]} />)
  .add('SelectedBerth', () => <SelectedBerth berth={berths[0]} />);

storiesOf('Berths/Sections', module)
  .add('BerthsOnMap', () => <BerthsOnMap berths={berths} />)
  .add('Berths', () => <Berths berths={berths} />)
  .add('SelectedBerths', () => <SelectedBerths berths={berths} selected={selectedBerths} />);

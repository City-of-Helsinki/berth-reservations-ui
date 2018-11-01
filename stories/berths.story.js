import React from 'react';
import { storiesOf } from '@storybook/react';

import BerthsOnMap from '../src/components/berths/BerthsOnMap';
import ListBerths from '../src/components/berths/ListBerths';
import SelectedBerths from '../src/components/berths/SelectedBerths';
import Berth from '../src/components/berths/Berth';

import berths from './berths';

const selectedBerths = berths.slice(0, 3).map(berth => berth.id);

storiesOf('berths/Components', module).add('berth', () => <Berth berth={berths[0]} />);

storiesOf('berths/Sections', module)
  .add('BerthsOnMap', () => <BerthsOnMap berths={berths} />)
  .add('ListBerths', () => <ListBerths berths={berths} />)
  .add('SelectedBerths', () => <SelectedBerths berths={berths} selected={selectedBerths} />);

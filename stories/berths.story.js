import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BerthsOnMap from '../src/components/berths/BerthsOnMap';
import Berths from '../src/components/berths/Berths';
import SelectedBerths from '../src/components/berths/SelectedBerths';
import Berth from '../src/components/berths/Berth';
import SelectedBerth from '../src/components/berths/SelectedBerth';

import berths from './berths';

const selectedBerths = berths.slice(0, 3).map(berth => berth.identifier);

storiesOf('Berths/Components', module)
  .add('Berth', () => <Berth berth={berths[0]} />)
  .add('SelectedBerth', () => <SelectedBerth berth={berths[0]} />);

storiesOf('Berths/Sections', module)
  .add('BerthsOnMap', () => (
    <BerthsOnMap berths={berths} onClick={action('onClick')} selected={selectedBerths} />
  ))
  .add('Berths', () => (
    <Berths berths={berths} onClick={action('onClick')} selected={selectedBerths} />
  ))
  .add('SelectedBerths', () => (
    <SelectedBerths berths={berths} moveUp={action('moveUp')} moveDown={action('moveDown')} />
  ));

import React from 'react';

import { Container } from 'reactstrap';
import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import { FormMode } from '../types';
import './Tabs.scss';

type Props = {
  mode: FormMode;
} & WithBoatType;

export default ({ mode, boatTypes }: Props) => (
  <Container>
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    {mode === 'berth' && <Accessibility />}
  </Container>
);

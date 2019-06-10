import React from 'react';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

import { FormMode } from '../../../types/form';
import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = {
  mode: FormMode;
} & WithBoatType;

export default ({ mode, boatTypes }: Props) => (
  <Container>
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    {mode === FormMode.Berth && <Accessibility />}
  </Container>
);

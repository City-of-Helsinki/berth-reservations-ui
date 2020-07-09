import React from 'react';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = WithBoatType;

const BerthUnRegisteredBoat = ({ boatTypes }: Props) => (
  <Container>
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    <Accessibility />
  </Container>
);

export default BerthUnRegisteredBoat;

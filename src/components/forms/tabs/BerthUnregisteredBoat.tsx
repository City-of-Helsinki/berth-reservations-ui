import React from 'react';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnregisteredBoatDetails from '../fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = WithBoatType;

const BerthUnregisteredBoat = ({ boatTypes }: Props) => (
  <Container>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    <Accessibility />
  </Container>
);

export default BerthUnregisteredBoat;

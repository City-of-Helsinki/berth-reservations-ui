import React from 'react';
import { Container } from 'reactstrap';

import BoatInfo from '../fragments/BoatInfo';
import UnregisteredBoatDetails from '../fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = WithBoatType;

const WinterUnregisteredBoat = ({ boatTypes }: Props) => (
  <Container>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
  </Container>
);

export default WinterUnregisteredBoat;

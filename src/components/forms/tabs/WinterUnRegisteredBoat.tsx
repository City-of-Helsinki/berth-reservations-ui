import React from 'react';
import { Container } from 'reactstrap';

import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = WithBoatType;

const WinterUnRegisteredBoat = ({ boatTypes }: Props) => (
  <Container>
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
  </Container>
);

export default WinterUnRegisteredBoat;

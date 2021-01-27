import React from 'react';
import { Container } from 'reactstrap';

import BoatInfo from '../fragments/BoatInfo';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = WithBoatType;

const WinterRegisteredBoat = ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <RegisteredBoatDetails boatTypes={boatTypes} />
    <BoatMeasures showWeight={false} showDraught={false} />
    <BoatInfo />
  </Container>
);

export default WinterRegisteredBoat;

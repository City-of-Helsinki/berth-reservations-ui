import React from 'react';
import { Container } from 'reactstrap';

import UnregisteredBoatDetails from '../fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = WithBoatType;

const WinterNoBoat = ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <UnregisteredBoatDetails boatTypes={boatTypes} />
  </Container>
);

export default WinterNoBoat;

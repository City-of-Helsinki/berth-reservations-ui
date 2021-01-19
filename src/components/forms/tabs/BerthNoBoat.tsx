import React from 'react';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import UnregisteredBoatDetails from '../fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = WithBoatType;

const BerthNoBoat = ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <Accessibility />
  </Container>
);

export default BerthNoBoat;

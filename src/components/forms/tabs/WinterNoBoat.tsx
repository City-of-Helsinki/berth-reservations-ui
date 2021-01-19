import React from 'react';
import { Container } from 'reactstrap';

import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = WithBoatType;

const WinterNoBoat = ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
  </Container>
);

export default WinterNoBoat;

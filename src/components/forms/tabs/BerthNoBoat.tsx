import React from 'react';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = WithBoatType;

const BerthNoBoat = ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <Accessibility />
  </Container>
);

export default BerthNoBoat;

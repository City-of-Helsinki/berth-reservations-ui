import React from 'react';
import { Container } from 'reactstrap';

import { FormMode } from '../../../types/form';
import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './Tabs.scss';

type Props = {
  mode: FormMode;
} & WithBoatType;

export default ({ boatTypes, mode }: Props) => (
  <Container className="vene-form__styled-container">
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    {mode === FormMode.Berth && <Accessibility />}
  </Container>
);

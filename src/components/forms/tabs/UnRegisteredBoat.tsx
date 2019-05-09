import React from 'react';

import { Container } from 'reactstrap';
import { FORM_MODE } from '../../../constants/formConstants';
import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import { FormMode } from '../types';

import './Tabs.scss';

type Props = {
  mode: FormMode;
} & WithBoatType;

export default ({ mode, boatTypes }: Props) => (
  <Container>
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    {mode === FORM_MODE.BERTH && <Accessibility />}
  </Container>
);

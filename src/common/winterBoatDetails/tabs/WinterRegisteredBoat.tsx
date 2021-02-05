import React from 'react';

import BoatInfoFragment from '../../boatInfoFragment/BoatInfoFragment';
import BoatMeasures from '../../boatMeasuresFragment/BoatMeasuresFragment';
import RegisteredBoatDetails from '../../registeredBoatDetails/RegisteredBoatDetails';
import { WithBoatType } from '../../selects/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterRegisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <RegisteredBoatDetails boatTypes={boatTypes} />
    <BoatMeasures showWeight={false} showDraught={false} />
    <BoatInfoFragment />
  </FormTab>
);

export default WinterRegisteredBoat;

import React from 'react';

import BoatInfo from '../../../components/forms/fragments/BoatInfo';
import BoatMeasures from '../../../components/forms/fragments/BoatMeasures';
import RegisteredBoatDetails from '../../../components/forms/fragments/RegisteredBoatDetails';
import { WithBoatType } from '../../../components/forms/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterRegisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <RegisteredBoatDetails boatTypes={boatTypes} />
    <BoatMeasures showWeight={false} showDraught={false} />
    <BoatInfo />
  </FormTab>
);

export default WinterRegisteredBoat;

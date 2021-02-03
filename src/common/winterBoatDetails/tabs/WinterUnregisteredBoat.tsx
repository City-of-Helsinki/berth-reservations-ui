import React from 'react';

import BoatInfo from '../../../components/forms/fragments/BoatInfo';
import UnregisteredBoatDetails from '../../../components/forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../components/forms/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterUnregisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
  </FormTab>
);

export default WinterUnregisteredBoat;

import React from 'react';

import UnregisteredBoatDetails from '../../../components/forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../components/forms/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterNoBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
  </FormTab>
);

export default WinterNoBoat;

import React from 'react';

import FormTab from '../../../../../common/formTab/FormTab';
import Accessibility from '../../../../../components/forms/fragments/Accessibility';
import BoatInfo from '../../../../../components/forms/fragments/BoatInfo';
import UnregisteredBoatDetails from '../../../../../components/forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../../../components/forms/Selects';

type Props = WithBoatType;

const BerthUnregisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    <Accessibility />
  </FormTab>
);

export default BerthUnregisteredBoat;

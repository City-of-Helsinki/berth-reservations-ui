import React from 'react';

import FormTab from '../../../../../common/formTab/FormTab';
import Accessibility from '../../../../../components/forms/fragments/Accessibility';
import UnregisteredBoatDetails from '../../../../../components/forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../../../components/forms/Selects';

type Props = WithBoatType;

const BerthNoBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <Accessibility />
  </FormTab>
);

export default BerthNoBoat;

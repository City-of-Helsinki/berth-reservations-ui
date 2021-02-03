import React from 'react';

import FormTab from '../../../../../common/formTab/FormTab';
import Accessibility from './fragments/Accessibility';
import UnregisteredBoatDetails from '../../../../../common/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../../../common/selects/Selects';

type Props = WithBoatType;

const BerthNoBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <Accessibility />
  </FormTab>
);

export default BerthNoBoat;

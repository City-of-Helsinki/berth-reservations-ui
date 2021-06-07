import FormTab from '../../../../../common/formTab/FormTab';
import Accessibility from './fragments/Accessibility';
import BoatInfoFragment from '../../../../../common/boatInfoFragment/BoatInfoFragment';
import UnregisteredBoatDetails from '../../../../../common/unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../../../../common/selects/Selects';

type Props = WithBoatType;

const BerthUnregisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfoFragment />
    <Accessibility />
  </FormTab>
);

export default BerthUnregisteredBoat;

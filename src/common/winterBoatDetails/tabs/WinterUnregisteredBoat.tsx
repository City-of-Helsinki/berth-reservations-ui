import BoatInfoFragment from '../../boatInfoFragment/BoatInfoFragment';
import UnregisteredBoatDetails from '../../unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../selects/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterUnregisteredBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfoFragment />
  </FormTab>
);

export default WinterUnregisteredBoat;

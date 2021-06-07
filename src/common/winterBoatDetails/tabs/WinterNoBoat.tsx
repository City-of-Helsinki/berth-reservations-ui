import UnregisteredBoatDetails from '../../unregisteredBoatDetails/UnregisteredBoatDetails';
import { WithBoatType } from '../../selects/Selects';
import FormTab from '../../formTab/FormTab';

type Props = WithBoatType;

const WinterNoBoat = ({ boatTypes }: Props) => (
  <FormTab>
    <UnregisteredBoatDetails boatTypes={boatTypes} />
  </FormTab>
);

export default WinterNoBoat;

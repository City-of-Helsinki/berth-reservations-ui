import { BigBoatTypeValue, WithBoatType } from '../../../../../common/selects/Selects';
import SectionSelector from '../../../../../common/sectionSelector/SectionSelector';
import { BerthFormValues } from '../../../types';
import BoatDetailsPhase from '../BoatDetailsPhase';
import BerthNoBoat from './tabs/BerthNoBoat';
import BerthRegisteredBoat from './tabs/BerthRegisteredBoat';
import BerthUnregisteredBoat from './tabs/BerthUnregisteredBoat';

type Props = {
  values?: BerthFormValues;
  tab: string;
} & WithBoatType;

const CreateBerthBoat = ({ values, tab, boatTypes }: Props) => {
  const showBigShipsForm = values?.boatType === BigBoatTypeValue;
  return (
    <>
      <SectionSelector
        name="boat"
        sizes={{
          xs: 12,
          md: 4,
          lg: 3,
        }}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            tab: 'registered-boat',
            icon: 'registeredBoat',
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            tab: 'unregistered-boat',
            icon: 'unregisteredBoat',
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            tab: 'no-boat',
            icon: 'noBoat',
          },
        ]}
      />
      <BoatDetailsPhase>
        {tab === 'registered-boat' && <BerthRegisteredBoat showBigShipsForm={showBigShipsForm} boatTypes={boatTypes} />}
        {tab === 'unregistered-boat' && <BerthUnregisteredBoat boatTypes={boatTypes} />}
        {tab === 'no-boat' && <BerthNoBoat boatTypes={boatTypes} />}
      </BoatDetailsPhase>
    </>
  );
};

export default CreateBerthBoat;

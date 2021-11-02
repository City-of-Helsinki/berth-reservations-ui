import { useState, useEffect } from 'react';
import { useForm } from 'react-final-form';

import { WithBoatType } from '../../../../common/selects/Selects';
import { BerthFormValues, Harbors, Boat } from '../../types';
import CreateBerthBoat from './createBerthBoat/CreateBerthBoat';
import BoatDetailsSelectBoat from './BoatDetailsSelectBoat';
import BoatDetailsVerifyBoat from './BoatDetailsVerifyBoat';

enum BoatDetailsPhase {
  // Trying to find what phase is most fitting for the user.
  INDETERMINATE = 1,
  // User has many boats of which they have to select one.
  SELECT_BOAT = 2,
  // User checks the information of the boat. User is sent
  // into this phase automatically if they only have a single
  // boat.
  VERIFY_BOAT = 3,
  // User can add a new boat in case they do not have
  // a boat or the boat they are making an application for
  // is not added yet.
  CREATE_BOAT = 4,
}

function getInitialPhase(boats?: any[]) {
  if (!boats || boats.length === 0) {
    return BoatDetailsPhase.CREATE_BOAT;
  }

  if (boats.length === 1) {
    return BoatDetailsPhase.VERIFY_BOAT;
  }

  if (boats.length > 1) {
    return BoatDetailsPhase.SELECT_BOAT;
  }

  return BoatDetailsPhase.INDETERMINATE;
}

type Props = {
  values?: BerthFormValues;
  tab: string;
  selectedHarbors: Harbors;
  myBoats: Boat[];
} & WithBoatType;

const BoatDetails = ({ values, tab, boatTypes, selectedHarbors, myBoats: boats }: Props) => {
  const [phase, setPhase] = useState<BoatDetailsPhase | undefined>(BoatDetailsPhase.INDETERMINATE);
  const { change } = useForm();

  const selectedBoat = boats?.find((boat: any) => boat.id === values?.boatId);

  const handleBoatChange = (value: string) => {
    change('boatId', value);
    setPhase(BoatDetailsPhase.VERIFY_BOAT);
  };

  const handleCreateBoatIntent = () => {
    setPhase(BoatDetailsPhase.CREATE_BOAT);
  };

  useEffect(() => {
    if (phase === BoatDetailsPhase.INDETERMINATE) {
      const nextPhase = getInitialPhase(boats);
      const boat = boats?.[0];

      if (nextPhase === BoatDetailsPhase.VERIFY_BOAT && boat) {
        change('boatId', boat.id);
      }

      setPhase(nextPhase);
    }
  }, [boats, phase, change]);

  return (
    <>
      {phase === BoatDetailsPhase.SELECT_BOAT && (
        <BoatDetailsSelectBoat
          boats={boats}
          onBoatChange={handleBoatChange}
          onCreateBoatIntent={handleCreateBoatIntent}
        />
      )}
      {selectedBoat && phase === BoatDetailsPhase.VERIFY_BOAT && (
        <BoatDetailsVerifyBoat
          boat={selectedBoat}
          selectedHarbors={selectedHarbors}
          onCreateBoatIntent={handleCreateBoatIntent}
        />
      )}
      {phase === BoatDetailsPhase.CREATE_BOAT && <CreateBerthBoat tab={tab} boatTypes={boatTypes} values={values} />}
    </>
  );
};

export default BoatDetails;

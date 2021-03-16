import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDimension, formatWeight } from '../../../../common/utils/format';
import './boat.scss';

export type BoatType = {
  boatType: string;
  draught: number;
  id: string;
  length: number;
  model: string;
  name: string;
  registrationNumber: string;
  weight: number;
  width: number;
};

export type BoatProps = BoatType & {
  editBoat: (id: string) => void;
  deleteBoat: (id: string) => void;
};

const Boat = ({
  boatType,
  deleteBoat,
  draught,
  editBoat,
  id,
  length,
  model,
  name,
  registrationNumber,
  weight,
  width,
}: BoatProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="vene-boat">
      <p className="vene-boat__nameAndModelLabel">Veneen nimi ja merkki</p>
      <p className="vene-boat__nameAndModel">
        {model} {name}
      </p>

      <div className="vene-boat__properties">
        <LabelValuePair label={'Rekisterinumero'} value={registrationNumber} />
        <LabelValuePair label={'Veneen tyyppi'} value={boatType} />
        <br />
        <LabelValuePair label={'Veneen leveys'} value={formatDimension(width, language)} />
        <LabelValuePair label={'Veneen pituus'} value={formatDimension(length, language)} />
        <LabelValuePair label={'Veneen syväys'} value={formatDimension(draught, language)} />
        <LabelValuePair label={'Veneen paino'} value={formatWeight(weight, language)} />
      </div>

      <div>
        <Button size="small" variant="secondary" onClick={() => editBoat(id)}>
          Muokkaa veneen tietoja
        </Button>
        &emsp;
        <Button size="small" variant="danger" onClick={() => deleteBoat(id)}>
          Poista vene
        </Button>
      </div>
    </div>
  );
};

export default Boat;

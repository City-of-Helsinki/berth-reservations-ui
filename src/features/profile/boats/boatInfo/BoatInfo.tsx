import { Button } from 'hds-react';
import { useTranslation } from 'react-i18next';

import { Boat } from '../types';
import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDimension, formatWeight } from '../../../../common/utils/format';
import './boatInfo.scss';

export type BoatProps = Boat & {
  editBoat: (id: string) => void;
  deleteBoat: (id: string) => void;
};

const BoatInfo = ({
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
    <div className="vene-boat-info">
      <p className="vene-boat-info__nameAndModelLabel">{t('page.profile.boats.name_and_model')}</p>
      <p className="vene-boat-info__nameAndModel">
        {name} {model}
      </p>

      <div className="vene-boat-info__properties">
        <LabelValuePair label={t('page.profile.boats.registration_number')} value={registrationNumber} />
        <LabelValuePair label={t('page.profile.boats.boat_type')} value={boatType} />
        <br />
        <LabelValuePair label={t('page.profile.boats.boat_width')} value={formatDimension(width, language)} />
        <LabelValuePair label={t('page.profile.boats.boat_length')} value={formatDimension(length, language)} />
        <LabelValuePair label={t('page.profile.boats.boat_draught')} value={formatDimension(draught, language)} />
        <LabelValuePair label={t('page.profile.boats.boat_weight')} value={formatWeight(weight, language)} />
      </div>

      <div>
        <Button size="small" variant="secondary" onClick={() => editBoat(id)}>
          {t('page.profile.boats.edit_boat')}
        </Button>
        &emsp;
        <Button size="small" variant="danger" onClick={() => deleteBoat(id)}>
          {t('page.profile.boats.delete_boat')}
        </Button>
      </div>
    </div>
  );
};

export default BoatInfo;

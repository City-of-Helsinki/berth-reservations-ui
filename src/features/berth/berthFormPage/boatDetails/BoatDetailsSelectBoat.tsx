import { Button } from 'hds-react';
import { useTranslation } from 'react-i18next';

import HDSSelect from '../../../../common/fields/HDSSelect';
import BoatDetailsPhase from './BoatDetailsPhase';

type BoatDetailsSelectBoatBoatType = {
  id: string;
  name: string;
};

type Props = {
  boats: BoatDetailsSelectBoatBoatType[];
  onBoatChange: (boatId: string) => void;
  onCreateBoatIntent: () => void;
};

const BoatDetailsSelectBoat = ({ boats, onBoatChange, onCreateBoatIntent }: Props) => {
  const { t } = useTranslation();

  return (
    <BoatDetailsPhase>
      <BoatDetailsPhase.Section>
        <HDSSelect
          id="boatId"
          name="boatId"
          label={t('form.registered.field.boat_id.label')}
          options={boats.map((boat: any) => ({ value: boat.id, label: boat.name }))}
          onChange={onBoatChange}
          style={{ maxWidth: '360px' }}
        />
      </BoatDetailsPhase.Section>
      <BoatDetailsPhase.Section>
        <Button onClick={onCreateBoatIntent}>{t('form.registered.action.intent_to_create_boat')}</Button>
      </BoatDetailsPhase.Section>
    </BoatDetailsPhase>
  );
};

export default BoatDetailsSelectBoat;

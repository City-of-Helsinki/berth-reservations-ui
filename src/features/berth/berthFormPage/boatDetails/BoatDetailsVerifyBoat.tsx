import { Button, Notification } from 'hds-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Harbors, HarborType } from '../../types';
import BoatDetail from './BoatDetail';
import BoatDetailsPhase from './BoatDetailsPhase';
import './boatDetailsVerifyBoat.scss';

type BoatDetailsVerifyBoatDetailsListProps = {
  values: Array<{ title: string; description: string }>;
};

const BoatDetailsVerifyBoatDetailsList = ({ values }: BoatDetailsVerifyBoatDetailsListProps) => {
  return (
    <ul className="verify-berth-boat__detail-list">
      {values.map(
        ({ title, description }) =>
          description && (
            <li key={title}>
              <BoatDetail title={title} description={description} />
            </li>
          )
      )}
    </ul>
  );
};

type BoatDetailsVerifyBoatBoatType = {
  registrationNumber: string;
  boatType: {
    name: string | null;
    id: string;
  };
  length: number;
  width: number;
  draught: number;
  weight: number | null;
  model: string;
  name: string;
};

function getIsBoatSuitableForBerths(harbors: Harbors, boat: BoatDetailsVerifyBoatBoatType) {
  const isSuitableType = (harbor: HarborType) => harbor.suitableBoatTypes.includes(boat.boatType.id);
  const isSuitableDimensions = ({ maxWidth, maxLength, maxDepth }: HarborType) =>
    Boolean(
      maxWidth &&
        maxWidth >= boat.width &&
        maxLength &&
        maxLength >= boat.length &&
        maxDepth &&
        maxDepth >= boat.draught
    );

  return harbors.reduce((acc, harbor) => acc && isSuitableType(harbor) && isSuitableDimensions(harbor), true);
}

type Props = {
  boat: BoatDetailsVerifyBoatBoatType;
  selectedHarbors: Harbors;
  onCreateBoatIntent: () => void;
};

const BoatDetailsVerifyBoat = ({ boat, onCreateBoatIntent, selectedHarbors }: Props) => {
  const { t } = useTranslation();

  useEffect(() => window.scroll(0, 0), []);

  return (
    <BoatDetailsPhase className="verify-berth-boat">
      <BoatDetailsPhase.Section>
        <p>{t('form.registered.header.boat_from_profile')}</p>
        {!getIsBoatSuitableForBerths(selectedHarbors, boat) && (
          <Notification label={t('form.registered.notification.boat_does_not_match.label')} type="error" size="small">
            {t('form.registered.notification.boat_does_not_match.description')}
          </Notification>
        )}
      </BoatDetailsPhase.Section>
      <BoatDetailsPhase.Section>
        <h4>{t('form.registered.header.boat_info')}</h4>
        <BoatDetailsVerifyBoatDetailsList
          values={[
            { title: t('form.registered.field.register_number.label'), description: boat.registrationNumber },
            { title: t('form.registered.field.type.label'), description: boat.boatType.name ?? '-' },
          ]}
        />
        <h4>{t('form.registered.header.measures')}</h4>
        <BoatDetailsVerifyBoatDetailsList
          values={[
            { title: t('form.registered.field.width.label'), description: boat.width?.toString() ?? '-' },
            { title: t('form.registered.field.length.label'), description: boat.length?.toString() ?? '-' },
            { title: t('form.registered.field.draught.label'), description: boat.draught?.toString() ?? '-' },
            { title: t('form.registered.field.weight.label'), description: boat.weight?.toString() ?? '-' },
          ]}
        />
        <h4>{t('form.registered.header.additional_info')}</h4>
        <BoatDetailsVerifyBoatDetailsList
          values={[
            { title: t('form.registered.field.name.label'), description: boat.name ?? '-' },
            { title: t('form.registered.field.model.label'), description: boat.model ?? '-' },
          ]}
        />
      </BoatDetailsPhase.Section>
      <BoatDetailsPhase.Section>
        <Button onClick={onCreateBoatIntent}>{t('form.registered.action.intent_to_create_boat')}</Button>
      </BoatDetailsPhase.Section>
    </BoatDetailsPhase>
  );
};

export default BoatDetailsVerifyBoat;

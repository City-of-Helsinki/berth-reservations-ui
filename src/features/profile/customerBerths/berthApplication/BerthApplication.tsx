import { Button, Checkbox } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import './berthApplication.scss';
import AvailabilityLevel from '../../../../common/availabilityLevel/AvailabilityLevel';
import Icon from '../../../../common/icon/Icon';
import { formatDate } from '../../../../common/utils/format';

export interface BerthChoice {
  name: string;
  availabilityLevel: {
    id: string;
    label: string;
  };
  electricity: boolean;
  water: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  gate: boolean;
}

export interface ApplicationProps {
  applicationDate: string;
  berthChoices: BerthChoice[];
}

const BerthApplication = ({ applicationDate, berthChoices }: ApplicationProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const renderAppliedBerth = (
    { name, availabilityLevel, electricity, gate, lighting, wasteCollection, water }: BerthChoice,
    index: number
  ) => (
    <div>
      <p>
        {index + 1}. {name}
      </p>
      <div className="vene-berth-application__berth-details">
        <AvailabilityLevel level={availabilityLevel.id} label={availabilityLevel.label} />
        <div className="vene-berth-application__berth-properties">
          {electricity && <Icon name="plug" />}
          {gate && <Icon name="fence" />}
          {lighting && <Icon name="streetLight" />}
          {wasteCollection && <Icon name="trash" />}
          {water && <Icon name="waterTap" />}
        </div>
      </div>
    </div>
  );

  return (
    <div className="vene-berth-application">
      <p>
        {t('common.sent')}: {formatDate(applicationDate, language)}
      </p>

      <h2 className="vene-berth-application__heading">{t('page.profile.berths.berth_offer.applied_berths')}</h2>
      <div className="vene-berth-application__applied-berths">{berthChoices.map(renderAppliedBerth)}</div>

      <Checkbox
        checked
        id="keep-application-active"
        labelText={t('page.profile.berths.berth_offer.keep_application_active')}
      />

      <div className="vene-berth-application__buttons">
        <Button size="small" variant="secondary" disabled>
          {t('page.profile.berths.berth_offer.edit_application')}
        </Button>
        <Button size="small" variant="secondary" disabled>
          {t('page.profile.berths.berth_offer.delete_application')}
        </Button>
      </div>
    </div>
  );
};

export default BerthApplication;

import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import './winterStorageInfo.scss';

export interface WinterStorageInfoProps {
  area: string | null | undefined;
  section: string | null | undefined;
  place: string | null | undefined;
}

const WinterStorageInfo = ({ area, section, place }: WinterStorageInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="vene-payment-winter-storage-info">
      <h3 className="vene-payment-winter-storage-info__heading">{t('page.payment.winter_storage_information')}</h3>
      <LabelValuePair label={t('common.area')} value={area} />
      <LabelValuePair label={t('common.section')} value={section} />
      <LabelValuePair label={t('common.place')} value={place} />
    </div>
  );
};

export default WinterStorageInfo;

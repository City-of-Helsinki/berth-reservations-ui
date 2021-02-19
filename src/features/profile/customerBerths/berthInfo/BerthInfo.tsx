import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDimension } from '../../../../common/utils/format';
import Properties from '../properties/Properties';
import './berthInfo.scss';

export interface BerthInfoProps {
  className?: string;
  berthLength: number;
  berthNumber: string;
  berthWidth: number;
  electricity: boolean;
  gate: boolean;
  harborAddress: string;
  harborImage: string;
  harborMap: string;
  harborName: string;
  harborWebsite: string;
  lighting: boolean;
  mooringType: string; // FIXME
  pier: string;
  wasteCollection: boolean;
  water: boolean;
}

const BerthInfo = ({
  className,
  berthLength,
  berthNumber,
  berthWidth,
  electricity,
  gate,
  harborAddress,
  harborImage,
  harborMap,
  harborName,
  harborWebsite,
  lighting,
  mooringType,
  pier,
  wasteCollection,
  water,
}: BerthInfoProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className={classNames('vene-berth-info', className)}>
      <div className="vene-berth-info__main">
        <a href={harborImage}>
          <img className="vene-berth-info__image" src={harborImage} alt={harborName} />
        </a>
        <div>
          <h2 className="vene-berth-info__harbor-name">{harborName}</h2>
          <p>{harborAddress}</p>
          <p>
            <a href={harborWebsite} className="vene-berth-info__link">
              {t('page.profile.berths.berthOffer.berthInfo.harborWebsite')}
            </a>
            <a href={harborMap} className="vene-berth-info__link">
              {t('page.profile.berths.berthOffer.berthInfo.harborMap')}
            </a>
          </p>
        </div>
      </div>
      <Properties
        electricity={electricity}
        gate={gate}
        lighting={lighting}
        wasteCollection={wasteCollection}
        water={water}
      />
      <p className="vene-berth-info__field vene-berth-info__field--bold">
        {t('page.profile.berths.berthOffer.berthInfo.pier')}: {pier}
      </p>
      <p className="vene-berth-info__field vene-berth-info__field--bold">
        {t('page.profile.berths.berthOffer.berthInfo.berthNumber')}: {berthNumber}
      </p>
      <p className="vene-berth-info__field">
        {t('page.profile.berths.berthOffer.berthInfo.berthWidth')}: {formatDimension(berthWidth, language)}
      </p>
      <p className="vene-berth-info__field">
        {t('page.profile.berths.berthOffer.berthInfo.berthLength')}: {formatDimension(berthLength, language)}
      </p>
      <p className="vene-berth-info__field">
        {t('page.profile.berths.berthOffer.berthInfo.mooringType')}: {mooringType}
      </p>
    </div>
  );
};

export default BerthInfo;

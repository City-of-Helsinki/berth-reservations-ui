import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDimension } from '../../../../common/utils/format';
import Properties from '../properties/Properties';
import { BerthOffer } from '../types';
import './berthInfo.scss';

export interface BerthInfoProps {
  className?: string;
  berthOffer: BerthOffer;
}

const BerthInfo = ({
  className,
  berthOffer: {
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
  },
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
              {t('page.profile.berths.berthOffer.harborWebsite')}
            </a>
            <a href={harborMap} className="vene-berth-info__link">
              {t('page.profile.berths.berthOffer.harborMap')}
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

      <LabelValuePair
        labelClassName="vene-berth-info__bold-field"
        label={t('common.pier')}
        valueClassName="vene-berth-info__bold-field"
        value={pier}
      />
      <LabelValuePair
        labelClassName="vene-berth-info__bold-field"
        label={t('page.profile.berths.berthOffer.berthNumber')}
        valueClassName="vene-berth-info__bold-field"
        value={berthNumber}
      />

      <LabelValuePair
        labelClassName="vene-berth-info__normal-label"
        label={t('common.width')}
        value={formatDimension(berthWidth, language)}
      />
      <LabelValuePair
        labelClassName="vene-berth-info__normal-label"
        label={t('common.length')}
        value={formatDimension(berthLength, language)}
      />
      <LabelValuePair
        labelClassName="vene-berth-info__normal-label"
        label={t('common.mooringType')}
        value={mooringType}
      />
    </div>
  );
};

export default BerthInfo;

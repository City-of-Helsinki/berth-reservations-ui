import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../common/utils/format';
import BerthInfo from './berthInfo/BerthInfo';
import InfoSection from './infoSection/InfoSection';
import './berthOffer.scss';

export interface OfferProps {
  placeholder?: null;
}

const mockProps = {
  berthLength: 5,
  berthNumber: '15',
  berthWidth: 3.5,
  dueDate: '2021-03-25',
  electricity: true,
  gate: true,
  harborAddress: 'Kipparlahdenkuja 3, 00810 Helsinki',
  harborImage: '/img/helsinki_harbors/41189.jpg',
  harborMap: '',
  harborName: 'Kipparlahden venesatama',
  harborWebAddress: '',
  lighting: true,
  mooringType: 'Peräpoiju',
  pier: 'Rantamuuri',
  wasteCollection: true,
};

const BerthOffer = (props: OfferProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    berthLength,
    berthNumber,
    berthWidth,
    dueDate,
    harborAddress,
    harborImage,
    harborMap,
    harborName,
    harborWebAddress,
    mooringType,
    pier,
    electricity,
    gate,
    wasteCollection,
    lighting,
  } = mockProps;

  return (
    <div className="vene-berth-offer">
      <h1 className="vene-berth-offer__heading">
        {t('page.profile.berths.berthOffer.heading', { date: formatDate(dueDate, language) })}
      </h1>
      <div className="vene-berth-offer__columns">
        <div>
          <BerthInfo
            berthLength={berthLength}
            berthNumber={berthNumber}
            berthWidth={berthWidth}
            electricity={electricity}
            gate={gate}
            harborAddress={harborAddress}
            harborImage={harborImage}
            harborMap={harborMap}
            harborName={harborName}
            harborWebsite={harborWebAddress}
            lighting={lighting}
            mooringType={mooringType}
            pier={pier}
            wasteCollection={wasteCollection}
          />
          <div className="vene-berth-offer__buttons">
            <Button size="small">{t('page.profile.berths.berthOffer.acceptAndPay')}</Button>
            <Button size="small" variant="danger">
              {t('page.profile.berths.berthOffer.rejectOffer')}
            </Button>
          </div>
          <InfoSection>{t('page.profile.berths.berthOffer.infoText')}</InfoSection>
        </div>
      </div>
      <hr className="vene-berth-offer__divider" />
    </div>
  );
};

export default BerthOffer;

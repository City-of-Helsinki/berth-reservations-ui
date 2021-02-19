import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../__generated__/globalTypes';
import { formatDate } from '../../../common/utils/format';
import BerthInfo from './berthInfo/BerthInfo';
import InfoSection from './infoSection/InfoSection';
import './berthOffer.scss';
import OrderInfo from './orderInfo/OrderInfo';

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
  orderStatus: OrderStatus.WAITING,
  pier: 'Rantamuuri',
  seasonStartDate: '2021-06-10',
  seasonEndDate: '2021-09-14',
  orderId: 'anw4sxjrmeqma',
  wasteCollection: true,
  water: true,
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
    electricity,
    gate,
    harborAddress,
    harborImage,
    harborMap,
    harborName,
    harborWebAddress,
    lighting,
    mooringType,
    orderId,
    orderStatus,
    pier,
    seasonEndDate,
    seasonStartDate,
    wasteCollection,
    water,
  } = mockProps;

  return (
    <div className="vene-berth-offer">
      <h1 className="vene-berth-offer__heading">
        {t('page.profile.berths.berthOffer.heading', { date: formatDate(dueDate, language) })}
      </h1>
      <div className="vene-berth-offer__grid">
        <BerthInfo
          className="vene-berth-offer__berth-info"
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
          water={water}
        />
        <div className="vene-berth-offer__buttons">
          <Button size="small">{t('page.profile.berths.berthOffer.acceptAndPay')}</Button>
          <Button size="small" variant="danger">
            {t('page.profile.berths.berthOffer.rejectOffer')}
          </Button>
        </div>
        <InfoSection className="vene-berth-offer__info-text">
          {t('page.profile.berths.berthOffer.infoText')}
        </InfoSection>
        <OrderInfo
          className="vene-berth-offer__order-info"
          status={orderStatus}
          id={orderId}
          dueDate={dueDate}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />
      </div>
      <hr className="vene-berth-offer__divider" />
    </div>
  );
};

export default BerthOffer;

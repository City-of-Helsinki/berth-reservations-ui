import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../__generated__/globalTypes';
import { formatDate } from '../../../common/utils/format';
import BerthInfo from './berthInfo/BerthInfo';
import InfoSection from './infoSection/InfoSection';
import OrderInfo, { Order } from './orderInfo/OrderInfo';
import './berthOffer.scss';

export interface OfferProps {
  placeholder?: null;
}

const mockOrder: Order = {
  fixedProducts: [
    {
      id: 'MOCK-PRODUCT-0',
      name: 'MOORING',
      orderId: 'MOCK-ORDER-0',
      price: 79.52,
    },
    {
      id: 'MOCK-PRODUCT-1',
      name: 'ELECTRICITY',
      orderId: 'MOCK-ORDER-0',
      price: 34.08,
    },
    {
      id: 'MOCK-PRODUCT-2',
      name: 'WATER',
      orderId: 'MOCK-ORDER-0',
      price: 5.68,
    },
    {
      id: 'MOCK-PRODUCT-3',
      name: 'WASTE_COLLECTION',
      orderId: 'MOCK-ORDER-0',
      price: 22.72,
    },
    {
      id: 'MOCK-PRODUCT-4',
      name: 'GATE',
      orderId: 'MOCK-ORDER-0',
      price: 4,
    },
    {
      id: 'MOCK-PRODUCT-5',
      name: 'LIGHTING',
      orderId: 'MOCK-ORDER-0',
      price: 10,
    },
  ],
  fixedProductsTotalPrice: 365.77,
  netPrice: 354.84,
  optionalProducts: [
    {
      id: 'MOCK-PRODUCT-6',
      name: 'PARKING_PERMIT',
      orderId: 'MOCK-ORDER-0',
      price: 75,
    },
  ],
  orderNumber: 'anw4sxjrmeqma',
  price: 284,
  totalPrice: 440,
  vatAmount: 85.16,
  vatPercentage: 24,
};

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
  order: mockOrder,
  seasonStartDate: '2021-06-10',
  seasonEndDate: '2021-09-14',
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
    order,
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
          berthWidth={berthWidth}
          className="vene-berth-offer__order-info"
          dueDate={dueDate}
          order={order}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
          status={orderStatus}
        />
      </div>
      <hr className="vene-berth-offer__divider" />
    </div>
  );
};

export default BerthOffer;

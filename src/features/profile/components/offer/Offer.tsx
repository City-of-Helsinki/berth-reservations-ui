import { Button } from 'hds-react';
import { useTranslation } from 'react-i18next';

import PlaceInfo, { Area, PlaceSpec } from '../placeInfo/PlaceInfo';
import InfoSection from '../infoSection/InfoSection';
import OrderInfo from '../orderInfo/OrderInfo';
import { Order } from '../../types';

import './offer.scss';

export interface OfferProps {
  area: Area;
  placeSpecs: PlaceSpec[];
  heading: string;
  properties: Record<string, boolean>;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
  infoMsg: string;
}

const Offer = ({
  area,
  heading,
  properties,
  infoMsg,
  order,
  placeSpecs,
  seasonEndDate,
  seasonStartDate,
}: OfferProps) => {
  const { t } = useTranslation();

  return (
    <div className="vene-offer">
      <h1 className="vene-offer__heading">{heading}</h1>

      <div className="vene-offer__grid">
        <PlaceInfo className="vene-offer__place-info" area={area} properties={properties} specs={placeSpecs} />

        <div className="vene-offer__buttons">
          <Button size="small">{t('page.profile.offer.accept_and_pay')}</Button>
          <Button size="small" variant="danger">
            {t('page.profile.offer.reject_offer')}
          </Button>
        </div>

        <InfoSection className="vene-offer__info-text">{infoMsg}</InfoSection>

        <OrderInfo
          baseProduct={{
            id: 'baseProduct',
            orderId: 'foo',
            name: t('page.profile.offer.base_price', {
              // width: formatDimension(berthProperties.berthWidth, language),
            }),
            price: order.price,
          }}
          className="vene-offer__order-info"
          fixedProducts={order.fixedProducts}
          order={order}
          optionalProducts={order.optionalProducts}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />
      </div>
    </div>
  );
};

export default Offer;

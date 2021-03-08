import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../../common/utils/format';
import BerthInfo from '../berthInfo/BerthInfo';
import InfoSection from '../infoSection/InfoSection';
import OrderInfo from '../orderInfo/OrderInfo';
import { BerthOffer as BerthOfferType, Order } from '../types';
import './berthOffer.scss';

export interface OfferProps {
  berthOffer: BerthOfferType;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
}

const BerthOffer = ({ berthOffer, order, seasonEndDate, seasonStartDate }: OfferProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="vene-berth-offer">
      <h1 className="vene-berth-offer__heading">
        {t('page.profile.berths.berth_offer.heading', { date: formatDate(order.dueDate, language) })}
      </h1>

      <div className="vene-berth-offer__grid">
        <BerthInfo className="vene-berth-offer__berth-info" berthOffer={berthOffer} />

        <div className="vene-berth-offer__buttons">
          <Button size="small">{t('page.profile.berths.berth_offer.accept_and_pay')}</Button>
          <Button size="small" variant="danger">
            {t('page.profile.berths.berth_offer.reject_offer')}
          </Button>
        </div>

        <InfoSection className="vene-berth-offer__info-text">
          {t('page.profile.berths.berth_offer.info_text')}
        </InfoSection>

        <OrderInfo
          berthWidth={berthOffer.berthWidth}
          className="vene-berth-offer__order-info"
          order={order}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />
      </div>
    </div>
  );
};

export default BerthOffer;

import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../common/utils/format';
import BerthApplication, { BerthChoice } from './berthApplication/BerthApplication';
import BerthInfo from './berthInfo/BerthInfo';
import InfoSection from './infoSection/InfoSection';
import OrderInfo from './orderInfo/OrderInfo';
import './berthOffer.scss';
import { BerthOffer as BerthOfferType, Order } from './types';

export interface OfferProps {
  applicationDate: string;
  berthChoices: BerthChoice[];
  berthOffer: BerthOfferType;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
}

const BerthOffer = ({
  applicationDate,
  berthChoices,
  berthOffer,
  order,
  seasonEndDate,
  seasonStartDate,
}: OfferProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="vene-berth-offer">
      <h1 className="vene-berth-offer__heading">
        {t('page.profile.berths.berthOffer.heading', { date: formatDate(order.dueDate, language) })}
      </h1>

      <div className="vene-berth-offer__grid">
        <BerthInfo className="vene-berth-offer__berth-info" berthOffer={berthOffer} />

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
          berthWidth={berthOffer.berthWidth}
          className="vene-berth-offer__order-info"
          order={order}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />
      </div>

      <hr className="vene-berth-offer__divider" />

      <BerthApplication applicationDate={applicationDate} berthChoices={berthChoices} />
    </div>
  );
};

export default BerthOffer;

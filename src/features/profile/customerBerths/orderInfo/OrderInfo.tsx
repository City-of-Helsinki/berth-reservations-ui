import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDate, formatDimension, formatPercentage, formatPrice } from '../../../../common/utils/format';
import { Order, Product } from '../types';
import './orderInfo.scss';
import OrderStatusLabel from './OrderStatusLabel';
import { getProductServiceTKey } from './utils';

export interface OrderInfoProps {
  berthWidth: number;
  className?: string;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
}

const SPORTS_SERVICES_PRICES_URL =
  'https://www.hel.fi/kulttuurin-ja-vapaa-ajan-toimiala/fi/palvelut/liikunta-ja-ulkoilu/maksut/';

const OrderInfo = ({ berthWidth, className, order, seasonEndDate, seasonStartDate }: OrderInfoProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const Row = ({ label, value, bold }: { label: string; value?: string; bold?: boolean }) => (
    <LabelValuePair
      className="vene-order-info__order-row"
      labelClassName={classNames('vene-order-info__order-row-label', {
        'vene-order-info__order-row-label--bold': bold,
      })}
      label={label}
      valueClassName={classNames('vene-order-info__order-row-value', {
        'vene-order-info__order-row-value--bold': bold,
      })}
      value={value}
    />
  );

  const mapProduct = (product: Product, i: number) => (
    <Row key={i} label={t(getProductServiceTKey(product.name))} value={formatPrice(product.price, language)} />
  );

  return (
    <div className={classNames('vene-order-info', className)}>
      <OrderStatusLabel status={order.orderStatus} />

      <div className={'vene-order-info__fields'}>
        <LabelValuePair
          labelClassName="vene-order-info__field"
          label={t('common.orderNumber')}
          valueClassName="vene-order-info__field"
          value={order.orderNumber}
        />
        <LabelValuePair
          labelClassName="vene-order-info__field"
          label={t('common.dueDate')}
          valueClassName="vene-order-info__field"
          value={formatDate(order.dueDate, language)}
        />
        <LabelValuePair
          labelClassName="vene-order-info__field"
          label={t('common.season')}
          valueClassName="vene-order-info__field"
          value={`${formatDate(seasonStartDate, language)} - ${formatDate(seasonEndDate, language)}`}
        />
      </div>

      <div className="vene-order-info__order-rows">
        <Row
          label={t('page.profile.berths.berthOffer.basePrice', {
            berthWidth: formatDimension(berthWidth, language),
          })}
          value={formatPrice(order.price, language)}
        />
        {order.fixedProducts.map(mapProduct)}

        <hr className="vene-order-info__divider" />

        <Row
          label={t('page.profile.berths.berthOffer.berthTotal')}
          value={formatPrice(order.fixedProductsTotalPrice, language)}
        />
        {order.optionalProducts.length > 0 && <Row label={t('common.additionalServices')} value="&nbsp;" />}
        {order.optionalProducts.map(mapProduct)}

        <hr className="vene-order-info__divider" />

        <Row bold label={t('page.profile.berths.berthOffer.netPrice')} value={formatPrice(order.netPrice, language)} />
        <Row
          bold
          label={t('common.vat')}
          value={`${formatPrice(order.vatAmount, language)} (${formatPercentage(order.vatPercentage, language)})`}
        />
        <Row
          bold
          label={t('common.total').toUpperCase()}
          value={`${formatPrice(order.totalPrice, language)} / ${t('common.year').toLowerCase()}`}
        />
      </div>

      <a className="vene-order-info__link" href={SPORTS_SERVICES_PRICES_URL}>
        {t('page.profile.berths.berthOffer.sportsServicesPrices')}
      </a>
    </div>
  );
};

export default OrderInfo;

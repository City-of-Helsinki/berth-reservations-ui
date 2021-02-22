import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../../__generated__/globalTypes';
import { formatDate, formatDimension, formatPercentage, formatPrice } from '../../../../common/utils/format';
import { getProductServiceTKey } from './utils';
import OrderStatusLabel from './OrderStatusLabel';
import './orderInfo.scss';

export interface Product {
  id: string;
  name: string; // TODO: Use real enum
  orderId: string;
  price: number;
}

export interface Order {
  fixedProducts: Product[];
  fixedProductsTotalPrice: number;
  netPrice: number;
  optionalProducts: Product[];
  orderNumber: string;
  price: number;
  totalPrice: number;
  vatAmount: number;
  vatPercentage: number;
}

export interface OrderInfoProps {
  berthWidth: number;
  className?: string;
  dueDate: string;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
  status: OrderStatus;
}

const SPORTS_SERVICES_PRICES_URL =
  'https://www.hel.fi/kulttuurin-ja-vapaa-ajan-toimiala/fi/palvelut/liikunta-ja-ulkoilu/maksut/';

const OrderInfo = ({
  berthWidth,
  className,
  dueDate,
  order,
  seasonEndDate,
  seasonStartDate,
  status,
}: OrderInfoProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const Row = ({ children, bold, ...rest }: React.ComponentProps<'div'> & { bold?: boolean }) => (
    <div className={classNames('vene-order-info__order-row', { 'vene-order-info__order-row--bold': bold })} {...rest}>
      {children}
    </div>
  );

  const renderSeason = (seasonStartDate: string, seasonEndDate: string, locale: string) => {
    const label = t('page.profile.berths.berthOffer.season');
    const startDate = formatDate(seasonStartDate, locale);
    const endDate = formatDate(seasonEndDate, locale);
    return `${label}: ${startDate} - ${endDate}`;
  };

  const mapProduct = (product: Product, i: number) => (
    <Row key={i}>
      <p>{t(getProductServiceTKey(product.name))}</p>
      <p>{formatPrice(product.price, language)}</p>
    </Row>
  );

  return (
    <div className={classNames('vene-order-info', className)}>
      <OrderStatusLabel status={status} />
      <p className="vene-order-info__field">
        {t('page.profile.berths.berthOffer.orderNumber')}: {order.orderNumber}
      </p>
      <p className="vene-order-info__field">
        {t('page.profile.berths.berthOffer.dueDate')}: {formatDate(dueDate, language)}
      </p>
      <p className="vene-order-info__field">{renderSeason(seasonStartDate, seasonEndDate, language)}</p>

      <div className="vene-order-info__order-rows">
        <Row>
          <p>
            {t('page.profile.berths.berthOffer.basePrice', {
              berthWidth: formatDimension(berthWidth, language),
            })}
            :
          </p>
          <p>{formatPrice(order.price, language)}</p>
        </Row>
        {order.fixedProducts.map(mapProduct)}

        <hr className="vene-order-info__divider" />

        <Row>
          <p>{t('page.profile.berths.berthOffer.berthTotal')}:</p>
          <p>{formatPrice(order.fixedProductsTotalPrice, language)}</p>
        </Row>
        {order.optionalProducts.length > 0 && (
          <Row>
            <p>{t('page.profile.berths.berthOffer.additionalServices')}:</p>
          </Row>
        )}
        {order.optionalProducts.map(mapProduct)}

        <hr className="vene-order-info__divider" />

        <Row bold>
          <p>{t('page.profile.berths.berthOffer.netPrice')}:</p>
          <p>{formatPrice(order.netPrice, language)}</p>
        </Row>
        <Row bold>
          <p>{t('page.profile.berths.berthOffer.vat')}:</p>
          <p>
            {formatPrice(order.vatAmount, language)} ({formatPercentage(order.vatPercentage, language)})
          </p>
        </Row>
        <Row bold>
          <p>{t('page.profile.berths.berthOffer.total')}:</p>
          <p>
            {formatPrice(order.totalPrice, language)} / {t('page.profile.berths.berthOffer.year')}
          </p>
        </Row>
      </div>

      <a className="vene-order-info__link" href={SPORTS_SERVICES_PRICES_URL}>
        Liikuntapalvelujen hinnasto
      </a>
    </div>
  );
};

export default OrderInfo;

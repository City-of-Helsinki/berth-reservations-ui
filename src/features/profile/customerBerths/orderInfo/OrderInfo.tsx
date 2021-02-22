import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

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

  const Row = ({ children, bold, ...rest }: React.ComponentProps<'div'> & { bold?: boolean }) => (
    <div className={classNames('vene-order-info__order-row', { 'vene-order-info__order-row--bold': bold })} {...rest}>
      {children}
    </div>
  );

  const renderSeason = (seasonStartDate: string, seasonEndDate: string, locale: string) => {
    const label = t('common.season');
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
      <OrderStatusLabel status={order.orderStatus} />
      <p className="vene-order-info__field">
        {t('common.orderNumber')}: {order.orderNumber}
      </p>
      <p className="vene-order-info__field">
        {t('common.dueDate')}: {formatDate(order.dueDate, language)}
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
            <p>{t('common.additionalServices')}:</p>
          </Row>
        )}
        {order.optionalProducts.map(mapProduct)}

        <hr className="vene-order-info__divider" />

        <Row bold>
          <p>{t('page.profile.berths.berthOffer.netPrice')}:</p>
          <p>{formatPrice(order.netPrice, language)}</p>
        </Row>
        <Row bold>
          <p>{t('common.vat')}:</p>
          <p>
            {formatPrice(order.vatAmount, language)} ({formatPercentage(order.vatPercentage, language)})
          </p>
        </Row>
        <Row bold>
          <p>{t('common.total').toUpperCase()}:</p>
          <p>
            {formatPrice(order.totalPrice, language)} / {t('common.year').toLowerCase()}
          </p>
        </Row>
      </div>

      <a className="vene-order-info__link" href={SPORTS_SERVICES_PRICES_URL}>
        {t('page.profile.berths.berthOffer.sportsServicesPrices')}
      </a>
    </div>
  );
};

export default OrderInfo;

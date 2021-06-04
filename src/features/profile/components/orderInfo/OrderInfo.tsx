import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDate, formatPercentage, formatPrice } from '../../../../common/utils/format';
import { Order, Product } from '../../types';
import OrderStatusLabel from './OrderStatusLabel';
import { getProductServiceTKey } from './utils';

import './orderInfo.scss';

export interface OrderInfoProps {
  className?: string;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
  baseProduct: Product;
  fixedProducts: Order['fixedProducts'];
  optionalProducts: Order['optionalProducts'];
}

const OrderInfo = ({
  baseProduct,
  className,
  order,
  fixedProducts,
  optionalProducts,
  seasonEndDate,
  seasonStartDate,
}: OrderInfoProps) => {
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
          label={t('common.order_number')}
          valueClassName="vene-order-info__field"
          value={order.orderNumber}
        />
        <LabelValuePair
          labelClassName="vene-order-info__field"
          label={t('common.due_date')}
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
        <Row label={baseProduct.name} value={formatPrice(baseProduct.price, language)} />
        {fixedProducts.map(mapProduct)}
        <hr className="vene-order-info__divider" />

        {!!optionalProducts.length && (
          <>
            <Row label={t('common.total')} value={formatPrice(order.fixedProductsTotalPrice, language)} />
            <Row label={t('common.additional_services')} value="&nbsp;" />
            {optionalProducts.map(mapProduct)}
            <hr className="vene-order-info__divider" />
          </>
        )}

        <Row
          bold
          label={t('page.profile.offer.net_price').toUpperCase()}
          value={formatPrice(order.netPrice, language)}
        />
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

      <a
        className="vene-order-info__link"
        href={t('page.profile.offer.sports_services_prices_url')}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('page.profile.offer.sports_services_prices')}
      </a>
    </div>
  );
};

export default OrderInfo;

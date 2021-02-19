import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../../__generated__/globalTypes';
import { formatDate } from '../../../../common/utils/format';
import OrderStatusLabel from './OrderStatusLabel';
import './orderInfo.scss';

export interface OrderInfoProps {
  className?: string;
  dueDate: string;
  seasonStartDate: string;
  seasonEndDate: string;
  id: string;
  status: OrderStatus;
}

const OrderInfo = ({ className, dueDate, id, status, seasonEndDate, seasonStartDate }: OrderInfoProps) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className={classNames('vene-order-info', className)}>
      <OrderStatusLabel status={status} />
      <p className="vene-order-info__field">Tilaustunnus: {id}</p>
      <p className="vene-order-info__field">Eräpäivä: {formatDate(dueDate, language)}</p>
      <p className="vene-order-info__field">
        Sopimuskausi: {formatDate(seasonStartDate, language)} - {formatDate(seasonEndDate, language)}
      </p>

      <div className="vene-order-info__order-rows">
        <div className="vene-order-info__order-row">
          <p>Perushinta (3,5 m):</p>
          <p>284,00 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Kiinnitys:</p>
          <p>79,52 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Sähkö:</p>
          <p>34,08 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Vesi:</p>
          <p>5,68 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Jäte:</p>
          <p>22,72 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Portti:</p>
          <p>4,00 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Valaistus:</p>
          <p>10,00 €</p>
        </div>

        <hr className="vene-order-info__divider" />

        <div className="vene-order-info__order-row">
          <p>Venepaikka yhteensä:</p>
          <p>365,77 €</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Lisäpalvelut:</p>
        </div>
        <div className="vene-order-info__order-row">
          <p>Pysäköintilupa:</p>
          <p>75 €</p>
        </div>

        <hr className="vene-order-info__divider" />

        <div className="vene-order-info__order-row vene-order-info__order-row--bold">
          <p>NETTOHINTA:</p>
          <p>354,84 €</p>
        </div>
        <div className="vene-order-info__order-row vene-order-info__order-row--bold">
          <p>ALV:</p>
          <p>85,16 € (24%)</p>
        </div>
        <div className="vene-order-info__order-row vene-order-info__order-row--bold">
          <p>YHTEENSÄ:</p>
          <p>440 € / vuosi</p>
        </div>
      </div>

      <a className="vene-order-info__link" href="/">
        Liikuntapalvelujen hinnasto
      </a>
    </div>
  );
};

export default OrderInfo;

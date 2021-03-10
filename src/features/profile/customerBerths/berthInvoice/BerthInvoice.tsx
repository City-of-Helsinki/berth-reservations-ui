import React from 'react';
import classNames from 'classnames';
import { Button } from 'hds-react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../../common/utils/format';
import BerthInfo from '../berthInfo/BerthInfo';
import OrderInfo from '../orderInfo/OrderInfo';
import ContractInfo, { ContractInfoProps } from '../contractInfo/ContractInfo';
import { BerthProperties, Order } from '../types';
import { OrderStatus } from '../../../../__generated__/globalTypes';
import './berthInvoice.scss';

export interface BerthInvoiceProps {
  berthProperties: BerthProperties;
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
  contract: Omit<ContractInfoProps, 'className'> | null;
}

const BerthInvoice = ({ berthProperties, order, seasonEndDate, seasonStartDate, contract }: BerthInvoiceProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className={classNames('vene-berth-invoice', { 'vene-berth-invoice--has-contract': contract })}>
      <h1 className="vene-berth-invoice__heading">
        {order.orderStatus !== OrderStatus.WAITING
          ? t('page.profile.berths.berth_invoice.heading')
          : t('page.profile.berths.berth_invoice.heading_secondary', { date: formatDate(order.dueDate, language) })}
      </h1>

      <div className="vene-berth-invoice__grid">
        <BerthInfo className="vene-berth-invoice__berth-info" berthProperties={berthProperties} />

        <OrderInfo
          berthWidth={berthProperties.berthWidth}
          className="vene-berth-invoice__order-info"
          order={order}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />

        {contract && <ContractInfo className="vene-berth-invoice__contract" {...contract} />}

        <div className="vene-berth-invoice__buttons">
          <Button size="small">{t('page.profile.berths.berth_invoice.pay')}</Button>
          <Button size="small" variant="danger">
            {t('page.profile.berths.berth_invoice.terminate_berth')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BerthInvoice;

import classNames from 'classnames';
import { Button } from 'hds-react';
import { useTranslation } from 'react-i18next';

import PlaceInfo, { Area, PlaceSpec } from '../placeInfo/PlaceInfo';
import OrderInfo from '../orderInfo/OrderInfo';
import ContractInfo, { ContractInfoProps } from '../contractInfo/ContractInfo';
import { Order } from '../../types';

import './invoice.scss';

export interface InvoiceProps {
  area: Area;
  heading: string;
  properties: Record<string, boolean>;
  placeSpecs: PlaceSpec[];
  order: Order;
  seasonEndDate: string;
  seasonStartDate: string;
  contract: Omit<ContractInfoProps, 'className'> | null;
}

const Invoice = ({
  area,
  heading,
  properties,
  placeSpecs,
  order,
  seasonEndDate,
  seasonStartDate,
  contract,
}: InvoiceProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('vene-invoice', { 'vene-invoice--has-contract': contract })}>
      <h1 className="vene-invoice__heading">{heading}</h1>

      <div className="vene-invoice__grid">
        <PlaceInfo className="vene-invoice__space-info" area={area} properties={properties} specs={placeSpecs} />

        <OrderInfo
          baseProduct={{
            id: 'baseProduct',
            orderId: 'foo',
            name: t('page.profile.offer.base_price', {
              // berthWidth: formatDimension(berthProperties.berthWidth, language),
            }),
            price: order.price,
          }}
          className="vene-invoice__order-info"
          fixedProducts={order.fixedProducts}
          order={order}
          optionalProducts={order.optionalProducts}
          seasonEndDate={seasonEndDate}
          seasonStartDate={seasonStartDate}
        />

        {contract && <ContractInfo className="vene-invoice__contract" {...contract} />}

        <div className="vene-invoice__buttons">
          <Button size="small">{t('page.profile.invoice.pay')}</Button>
          <Button size="small" variant="danger">
            {t('page.profile.berths.berth_invoice.terminate_berth')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

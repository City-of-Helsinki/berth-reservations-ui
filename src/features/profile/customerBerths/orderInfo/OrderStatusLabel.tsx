import { StatusLabel, StatusLabelProps } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../../__generated__/globalTypes';

export interface OrderStatusProps {
  status: OrderStatus;
}

const OrderStatusLabel = ({ status }: OrderStatusProps) => {
  const { t } = useTranslation();
  const getStatusLabelKey = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.CANCELLED:
        return 'Peruutettu';
      case OrderStatus.ERROR:
        return 'Virhe';
      case OrderStatus.EXPIRED:
        return 'Erääntynyt';
      case OrderStatus.PAID:
        return 'Maksettu';
      case OrderStatus.REJECTED:
        return 'Hylätty';
      case OrderStatus.WAITING:
        return 'Odottaa maksua';
    }
  };

  const getStatusLabelColor = (status: OrderStatus): StatusLabelProps['type'] => {
    switch (status) {
      case OrderStatus.CANCELLED:
        return 'error';
      case OrderStatus.ERROR:
        return 'error';
      case OrderStatus.EXPIRED:
        return 'error';
      case OrderStatus.PAID:
        return 'success';
      case OrderStatus.REJECTED:
        return 'error';
      case OrderStatus.WAITING:
        return 'alert';
    }
  };

  return <StatusLabel type={getStatusLabelColor(status)}>{t(getStatusLabelKey(status))}</StatusLabel>;
};

export default OrderStatusLabel;

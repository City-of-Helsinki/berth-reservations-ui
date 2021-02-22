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
        return 'common.cancelled';
      case OrderStatus.ERROR:
        return 'common.error';
      case OrderStatus.EXPIRED:
        return 'common.expired';
      case OrderStatus.PAID:
        return 'common.paid';
      case OrderStatus.REJECTED:
        return 'common.rejected';
      case OrderStatus.WAITING:
        return 'common.waitingForPayment';
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

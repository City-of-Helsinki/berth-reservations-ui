import { StatusLabel } from 'hds-react';
import { useTranslation } from 'react-i18next';

import { OrderStatus } from '../../../../__generated__/globalTypes';
import { getStatusLabelColor, getStatusLabelKey } from './utils';

export interface OrderStatusProps {
  status: OrderStatus;
}

const OrderStatusLabel = ({ status }: OrderStatusProps) => {
  const { t } = useTranslation();

  return <StatusLabel type={getStatusLabelColor(status)}>{t(getStatusLabelKey(status))}</StatusLabel>;
};

export default OrderStatusLabel;

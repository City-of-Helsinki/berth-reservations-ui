// TODO: Use real enum
import { StatusLabelProps } from 'hds-react';

import { OrderStatus } from '../../../../__generated__/globalTypes';

export const getProductServiceTKey = (productService: string) => {
  switch (productService) {
    case 'DINGHY_PLACE':
      return 'common.dinghyPlace';
    case 'ELECTRICITY':
      return 'common.electricity';
    case 'GATE':
      return 'common.gate';
    case 'LIGHTING':
      return 'common.lighting';
    case 'MOORING':
      return 'common.mooring';
    case 'PARKING_PERMIT':
      return 'common.parkingPermit';
    case 'STORAGE_ON_ICE':
      return 'common.storageOnIce';
    case 'SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT':
      return 'common.dockingEquipmentSummerStorage';
    case 'SUMMER_STORAGE_FOR_TRAILERS':
      return 'common.summerStorageForTrailers';
    case 'WASTE_COLLECTION':
      return 'common.wasteCollection';
    case 'WATER':
      return 'common.water';

    default:
      return productService;
  }
};

export const getStatusLabelKey = (status: OrderStatus) => {
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
    default:
      return status;
  }
};

export const getStatusLabelColor = (status: OrderStatus): StatusLabelProps['type'] => {
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
    default:
      return 'neutral';
  }
};

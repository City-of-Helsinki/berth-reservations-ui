import { OrderTypeEnum } from '../../__generated__/globalTypes';

export const isOrderBerthOrWinter = (orderType: OrderTypeEnum | undefined): 'berth' | 'winter' => {
  switch (orderType) {
    case OrderTypeEnum.BERTH:
    case OrderTypeEnum.ADDITIONAL_PRODUCT:
      return 'berth';
    case OrderTypeEnum.WINTER_STORAGE:
      return 'winter';
    default:
      return 'berth';
  }
};

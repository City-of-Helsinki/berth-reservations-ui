import { OrderStatus } from '../../../__generated__/globalTypes';

export interface Product {
  id: string;
  name: string; // TODO: Use real enum
  orderId: string;
  price: number;
}

export interface Order {
  dueDate: string;
  fixedProducts: Product[];
  fixedProductsTotalPrice: number;
  netPrice: number;
  optionalProducts: Product[];
  orderNumber: string;
  price: number;
  totalPrice: number;
  orderStatus: OrderStatus;
  vatAmount: number;
  vatPercentage: number;
}

export interface BerthProperties {
  berthLength: number;
  berthNumber: string;
  berthWidth: number;
  electricity: boolean;
  gate: boolean;
  harborAddress: string;
  harborImage: string;
  harborMap: string;
  harborName: string;
  harborWebsite: string;
  lighting: boolean;
  mooringType: string; // FIXME
  pier: string;
  wasteCollection: boolean;
  water: boolean;
}

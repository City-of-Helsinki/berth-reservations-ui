export interface OrderDetailsQuery {
  orderStatus: OrderStatusResp;
}

interface OrderStatusResp {
  status: OrderStatus;
}

export enum OrderStatus {
  WAITING = 'waiting',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
  PAID = 'paid',
}

export interface OrderDetailsQueryVariables {
  orderNumber: string;
}

export interface ConfirmPaymentResponse {
  confirmPayment: ConfirmPayment;
}

interface ConfirmPayment {
  url: string;
}

export interface ConfirmPaymentMutationInput {
  confirmPaymentMutationInput: ConfirmPaymentInput;
}

export interface ConfirmPaymentInput {
  orderNumber: string;
}

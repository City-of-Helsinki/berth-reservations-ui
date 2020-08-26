import queryString from 'query-string';

export function getOrderNumber(searchString: string): string | null {
  const parsed = queryString.parse(searchString);
  const orderNumber = parsed.order_number;

  if (Array.isArray(orderNumber) || !orderNumber) {
    return null;
  }
  return orderNumber;
}

export function getPaymentSuccess(searchString: string): boolean {
  const parsed = queryString.parse(searchString);
  const paymentStatus = parsed.payment_status;
  return paymentStatus === 'success';
}

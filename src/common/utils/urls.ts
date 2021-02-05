import * as queryString from 'query-string';

export const stripLeadingSlash = (value: string) => (value.charAt(0) === '/' ? value.substr(1) : value);

/**
 * Generates a valid CSS selector from a string by replacing invalid characters.
 * @param selector A string to be checked.
 * @returns A valid CSS selector.
 */
export const genValidSelector = (selector: string) => selector.replace(/^[^a-z]+|[^\w:.-]+/gi, 'x');

export const getOrderNumber = (searchString: string): string => {
  const parsed = queryString.parse(searchString);
  const orderNumber = parsed.order_number;

  if (Array.isArray(orderNumber) || !orderNumber) {
    return '';
  }
  return orderNumber;
};

export const setOrderNumber = (url: string, orderNumber: string): string => {
  const stringified = queryString.stringify({ order_number: orderNumber });

  return `${url}?${stringified}`;
};

export const getPaymentSuccess = (searchString: string): boolean => {
  const parsed = queryString.parse(searchString);
  const paymentStatus = parsed.payment_status;
  return paymentStatus === 'success';
};

import { getOrderNumber, getPaymentSuccess } from './urls';

describe('utils/urls', () => {
  describe('getOrderNumber', () => {
    it('should get order number', () => {
      expect(getOrderNumber('?order_number=123')).toEqual('123');
      expect(getOrderNumber('?order_number=')).toEqual('');
      expect(getOrderNumber('?order_number=123&order_number=123')).toEqual('');
      expect(getOrderNumber('?foo=123')).toEqual('');
      expect(getOrderNumber('')).toEqual('');
    });

    it('should get payment success', () => {
      expect(getPaymentSuccess('?payment_status=success')).toBeTruthy();
      expect(getPaymentSuccess('?payment_status=failure')).toBeFalsy();
      expect(getPaymentSuccess('?payment_status=')).toBeFalsy();
      expect(getPaymentSuccess('?foo=bar')).toBeFalsy();
    });
  });
});

import { getOrderNumber } from './urls';

describe('utils/urls', () => {
  describe('getOrderNumber', () => {
    test('should get order number', () => {
      expect(getOrderNumber('?order_number=123')).toEqual('123');

      expect(getOrderNumber('?order_number=')).toEqual(null);
      expect(getOrderNumber('?order_number=123&order_number=123')).toEqual(null);
      expect(getOrderNumber('?foo=123')).toEqual(null);
      expect(getOrderNumber('')).toEqual(null);
    });
  });
});

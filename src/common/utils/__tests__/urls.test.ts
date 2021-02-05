import { genValidSelector, stripLeadingSlash, getOrderNumber, getPaymentSuccess, setOrderNumber } from '../urls';

describe('utils/urls', () => {
  describe('stripLeadingSlash', () => {
    test('should strip the leading slash from the provided string', () => {
      const path = '/berths';
      const actualValue = stripLeadingSlash(path);
      expect(actualValue).toBe('berths');
    });

    test("should return the same string if it doen't have a leading slash", () => {
      const path = 'berths';
      const actualValue = stripLeadingSlash(path);
      expect(actualValue).toBe(path);
    });
  });

  describe('genValidSelector', () => {
    test('should replace digits in the beginning of the supplied string', () => {
      expect(genValidSelector('1ABC123')).toBe('xABC123');
    });

    test('should replace illegal characters', () => {
      expect(genValidSelector('ABC=123/')).toBe('ABCx123x');
    });
  });

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

  describe('setOrderNumber', () => {
    it('should return the provided url and the order_number query', () => {
      expect(setOrderNumber('foo', '123')).toEqual('foo?order_number=123');
    });
  });
});

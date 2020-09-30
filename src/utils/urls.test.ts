import { getOrderNumber, getPaymentSuccess, getTermsDocumentUrl } from './urls';

describe('utils/urls', () => {
  describe('getOrderNumber', () => {
    it('should get order number', () => {
      expect(getOrderNumber('?order_number=123')).toEqual('123');

      expect(getOrderNumber('?order_number=')).toEqual(null);
      expect(getOrderNumber('?order_number=123&order_number=123')).toEqual(null);
      expect(getOrderNumber('?foo=123')).toEqual(null);
      expect(getOrderNumber('')).toEqual(null);
    });

    it('should get payment success', () => {
      expect(getPaymentSuccess('?payment_status=success')).toBeTruthy();
      expect(getPaymentSuccess('?payment_status=failure')).toBeFalsy();
      expect(getPaymentSuccess('?payment_status=')).toBeFalsy();
      expect(getPaymentSuccess('?foo=bar')).toBeFalsy();
    });

    it('should get terms document URL', () => {
      expect(getTermsDocumentUrl('fi')).toEqual(
        '/Helsingin_talvisäilytyspaikan_vuokrasopimusehdot-fi.pdf'
      );
    });
  });
});

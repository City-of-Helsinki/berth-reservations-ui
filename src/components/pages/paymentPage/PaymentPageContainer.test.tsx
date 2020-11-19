import { shallow } from 'enzyme';
import React from 'react';

import { getPaymentPage } from './PaymentPageContainer';
import { OrderStatus, OrderTypeEnum } from '../../../__generated__/globalTypes';

describe('PaymentPageContainer', () => {
  it('should get correct page based on order status', () => {
    [
      [null, '#vene-payment-general-error-page'],
      [undefined, '#vene-payment-general-error-page'],
      [OrderStatus.WAITING, '#vene-payment-page'],
      [OrderStatus.EXPIRED, '#vene-payment-expired-page'],
      [OrderStatus.PAID, '#vene-already-paid-page'],
      [OrderStatus.REJECTED, '#vene-payment-general-error-page'],
    ].forEach((testItem) => {
      const wrapper = shallow(
        getPaymentPage(
          OrderTypeEnum.BERTH,
          '',
          true,
          testItem[0] as OrderStatus,
          [],
          jest.fn(),
          jest.fn()
        )
      );
      expect(wrapper.find(testItem[1] as string).exists()).toBeTruthy();
    });
  });
});

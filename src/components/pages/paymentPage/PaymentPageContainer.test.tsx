import { shallow } from 'enzyme';
import React from 'react';

import { getPaymentPage } from './PaymentPageContainer';
import { OrderStatus } from '../../../utils/paymentMocks';

describe('PaymentPageContainer', () => {
  it('should get correct page based on order status', () => {
    const confirmPayment = jest.fn();

    let wrapper = shallow(getPaymentPage(null, confirmPayment));
    expect(wrapper.find('.vene-payment-general-error-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(undefined, confirmPayment));
    expect(wrapper.find('.vene-payment-general-error-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderStatus.WAITING, confirmPayment));
    expect(wrapper.find('.vene-payment-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderStatus.EXPIRED, confirmPayment));
    expect(wrapper.find('.vene-payment-expired-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderStatus.PAID, confirmPayment));
    expect(wrapper.find('.vene-already-paid-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderStatus.REJECTED, confirmPayment));
    expect(wrapper.find('.vene-payment-general-error-page').exists()).toBeTruthy();
  });
});

import { shallow } from 'enzyme';
import React from 'react';

import { getPaymentPage } from './PaymentPageContainer';
import { OrderStatus, OrderTypeEnum } from '../../../__generated__/globalTypes';

describe('PaymentPageContainer', () => {
  const t = jest.fn();
  it('should get correct page based on order status', () => {
    const confirmPayment = jest.fn();

    let wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, null, confirmPayment, t));
    expect(wrapper.find('#vene-payment-general-error-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, undefined, confirmPayment, t));
    expect(wrapper.find('#vene-payment-general-error-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, OrderStatus.WAITING, confirmPayment, t));
    expect(wrapper.find('#vene-payment-page').exists()).toBeTruthy();

    wrapper = shallow(
      getPaymentPage(OrderTypeEnum.ADDITIONAL_PRODUCT, OrderStatus.WAITING, confirmPayment, t)
    );
    expect(wrapper.find('#vene-payment-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, OrderStatus.EXPIRED, confirmPayment, t));
    expect(wrapper.find('#vene-payment-expired-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, OrderStatus.PAID, confirmPayment, t));
    expect(wrapper.find('#vene-already-paid-page').exists()).toBeTruthy();

    wrapper = shallow(getPaymentPage(OrderTypeEnum.BERTH, OrderStatus.REJECTED, confirmPayment, t));
    expect(wrapper.find('#vene-payment-general-error-page').exists()).toBeTruthy();
  });
});

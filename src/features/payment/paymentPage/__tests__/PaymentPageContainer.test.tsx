import { shallow } from 'enzyme';

import { getPaymentPage } from '../PaymentPageContainer';
import { OrderStatus, OrderTypeEnum } from '../../../../__generated__/globalTypes';

describe('PaymentPageContainer', () => {
  const placeDetails = {
    area: 'Test Harbor',
    section: 'Test Pier',
    place: '10',
  };

  it('should get correct page based on order status', () => {
    [
      [null, '#vene-payment-general-error-page'],
      [undefined, '#vene-payment-general-error-page'],
      [OrderStatus.OFFERED, '#vene-payment-page'],
      [OrderStatus.EXPIRED, '#vene-payment-expired-page'],
      [OrderStatus.PAID, '#vene-already-paid-page'],
      [OrderStatus.REJECTED, '#vene-payment-general-error-page'],
    ].forEach((testItem) => {
      const wrapper = shallow(
        getPaymentPage(
          placeDetails,
          OrderTypeEnum.BERTH,
          '',
          true,
          testItem[0] as OrderStatus,
          [],
          jest.fn(),
          jest.fn(),
          jest.fn()
        )
      );
      expect(wrapper.find(testItem[1] as string).exists()).toBeTruthy();
    });
    expect.assertions(6);
  });
});

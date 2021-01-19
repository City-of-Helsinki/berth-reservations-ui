import React from 'react';

import PaymentReceivedPage from './paymentResult/PaymentReceivedPage';
import { getPaymentSuccess } from '../../../utils/urls';
import { PaymentFailedPage } from './paymentResult/PaymentFailedPage';

const PaymentResultContainer = () => {
  const success = getPaymentSuccess(window.location.search);

  if (success) {
    return <PaymentReceivedPage />;
  }
  return <PaymentFailedPage />;
};

export { PaymentResultContainer };

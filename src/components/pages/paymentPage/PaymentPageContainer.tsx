import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import PaymentPage from './PaymentPage';
import { CONFIRM_PAYMENT, GET_ORDER_DETAILS } from '../../../utils/graphql';
import { getOrderNumber } from '../../../utils/urls';
import {
  ConfirmPaymentMutationInput,
  ConfirmPaymentResponse,
  OrderDetailsQuery,
  OrderDetailsQueryVariables,
  OrderStatus,
} from '../../../utils/paymentMocks';
import GeneralPaymentErrorPage from './paymentError/GeneralPaymentErrorPage';
import AlreadyPaidPage from './paymentError/AlreadyPaidPage';
import PastDueDatePage from './paymentError/PastDueDatePage';
import { LoadingPage } from '../../common/loadingPage/LoadingPage';

const PaymentPageContainer = () => {
  const orderNumber = getOrderNumber(window.location.search);

  const [isRedirecting, setIsRedirecting] = useState(false);

  const {
    loading: loadingOrderDetails,
    data: orderStatusData,
    error: orderDetailsError,
  } = useQuery<OrderDetailsQuery, OrderDetailsQueryVariables>(GET_ORDER_DETAILS, {
    variables: {
      orderNumber: orderNumber as string,
    },
    skip: !orderNumber,
  });

  const [confirmPayment, { loading: loadingConfirmPayment, error: confirmError }] = useMutation<
    ConfirmPaymentResponse,
    ConfirmPaymentMutationInput
  >(CONFIRM_PAYMENT, {
    variables: {
      confirmPaymentMutationInput: {
        orderNumber: orderNumber as string,
      },
    },
    onCompleted: (confirmPaymentData: ConfirmPaymentResponse) => {
      setIsRedirecting(true);
      window.location.href = confirmPaymentData.confirmPayment.url;
    },
  });

  if (loadingOrderDetails || loadingConfirmPayment || isRedirecting) {
    return <LoadingPage />;
  }
  if (confirmError || orderDetailsError) {
    return <GeneralPaymentErrorPage />;
  }

  return getPaymentPage(orderStatusData?.orderStatus.status, confirmPayment);
};

export const getPaymentPage = (
  status: OrderStatus | undefined | null,
  confirmPayment: () => void
): JSX.Element => {
  if (!status) {
    return <GeneralPaymentErrorPage />;
  }

  switch (status) {
    case OrderStatus.WAITING:
      return <PaymentPage handlePay={confirmPayment} />;
    case OrderStatus.PAID:
      return <AlreadyPaidPage />;
    case OrderStatus.EXPIRED:
      return <PastDueDatePage />;
    default:
      return <GeneralPaymentErrorPage />;
  }
};

export { PaymentPageContainer };

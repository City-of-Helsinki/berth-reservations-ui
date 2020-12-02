import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import PaymentPage from './PaymentPage';
import { CONFIRM_PAYMENT, GET_ORDER_DETAILS } from '../../../utils/graphql';
import { getOrderNumber } from '../../../utils/urls';
import GeneralPaymentErrorPage from './paymentError/GeneralPaymentErrorPage';
import AlreadyPaidPage from './paymentError/AlreadyPaidPage';
import PastDueDatePage from './paymentError/PastDueDatePage';
import LoadingPage from '../../../common/loadingPage/LoadingPage';
import {
  ConfirmPayment,
  ConfirmPaymentVariables,
} from '../../../utils/__generated__/ConfirmPayment';
import { OrderDetails, OrderDetailsVariables } from '../../../utils/__generated__/OrderDetails';
import { OrderTypeEnum, OrderStatus } from '../../../__generated__/globalTypes';

const PaymentPageContainer = () => {
  const orderNumber = getOrderNumber(window.location.search);
  const { t } = useTranslation();

  const [isRedirecting, setIsRedirecting] = useState(false);

  const {
    loading: loadingOrderDetails,
    data: orderDetailsData,
    error: orderDetailsError,
  } = useQuery<OrderDetails, OrderDetailsVariables>(GET_ORDER_DETAILS, {
    variables: {
      orderNumber: orderNumber as string,
    },
    skip: !orderNumber,
  });

  const [confirmPayment, { loading: loadingConfirmPayment, error: confirmError }] = useMutation<
    ConfirmPayment,
    ConfirmPaymentVariables
  >(CONFIRM_PAYMENT, {
    variables: {
      confirmPaymentMutationInput: {
        orderNumber: orderNumber as string,
      },
    },
    onCompleted: (confirmPaymentData: ConfirmPayment) => {
      setIsRedirecting(true);
      window.location.href = confirmPaymentData?.confirmPayment?.url as string;
    },
  });

  if (loadingOrderDetails || loadingConfirmPayment || isRedirecting) {
    return <LoadingPage />;
  }
  if (confirmError || orderDetailsError) {
    return <GeneralPaymentErrorPage />;
  }

  return getPaymentPage(
    orderDetailsData?.orderDetails?.orderType,
    orderDetailsData?.orderDetails?.status,
    confirmPayment,
    t
  );
};

export const getPaymentPage = (
  orderType: OrderTypeEnum | undefined,
  status: OrderStatus | undefined | null,
  confirmPayment: () => void,
  t: TFunction
): JSX.Element => {
  if (!status) {
    return <GeneralPaymentErrorPage />;
  }

  const isAdditionalService = orderType === OrderTypeEnum.ADDITIONAL_PRODUCT;

  switch (status) {
    case OrderStatus.WAITING:
      return (
        <PaymentPage
          termsInfo={
            isAdditionalService
              ? t('page.payment.additional_services_terms_info')
              : t('page.payment.terms_info')
          }
          handlePay={confirmPayment}
          needsConfirmation={!isAdditionalService}
        />
      );
    case OrderStatus.PAID:
      return <AlreadyPaidPage />;
    case OrderStatus.EXPIRED:
      return <PastDueDatePage />;
    default:
      return <GeneralPaymentErrorPage />;
  }
};

export { PaymentPageContainer };

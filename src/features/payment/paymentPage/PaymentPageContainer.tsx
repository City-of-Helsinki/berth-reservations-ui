import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { compose } from 'recompose';

import PaymentPage from './PaymentPage';
import ContractPage from './ContractPage';
import { CONFIRM_PAYMENT, FULFILL_CONTRACT, GET_ORDER_DETAILS } from '../../queries';
import { getOrderNumber, setOrderNumber } from '../../../common/utils/urls';
import GeneralPaymentErrorPage from './paymentError/GeneralPaymentErrorPage';
import AlreadyPaidPage from './paymentError/AlreadyPaidPage';
import PastDueDatePage from './paymentError/PastDueDatePage';
import LoadingPage from '../../../common/loadingPage/LoadingPage';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { ConfirmPayment, ConfirmPaymentVariables } from '../../__generated__/ConfirmPayment';
import { OrderStatus, OrderTypeEnum } from '../../../__generated__/globalTypes';
import {
  OrderDetails,
  OrderDetails_contractAuthMethods as ContractAuthMethods,
  OrderDetailsVariables,
} from '../../__generated__/OrderDetails';
import { FulfillContract, FulfillContractVariables } from '../../__generated__/FulfillContract';

interface Props {
  localePush: LocalePush;
}

const PaymentPageContainer = ({ localePush }: Props) => {
  const orderNumber = getOrderNumber(window.location.search);

  const [isRedirecting, setIsRedirecting] = useState(false);

  const { loading: loadingOrderDetails, data: orderDetailsData, error: orderDetailsError } = useQuery<
    OrderDetails,
    OrderDetailsVariables
  >(GET_ORDER_DETAILS, {
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

  const [fulfillContract] = useMutation<FulfillContract, FulfillContractVariables>(FULFILL_CONTRACT);

  const handleSignContract = (authMethod: string) => {
    fulfillContract({
      variables: {
        fulfillContractMutationInput: {
          orderNumber: orderNumber as string,
          returnUrl: window.location.href,
          authService: authMethod,
        },
      },
    }).then((res) => {
      setIsRedirecting(true);
      window.location.href = res.data?.fulfillContract?.signingUrl as string;
    });
  };

  const handleTerminate = () => {
    localePush(setOrderNumber('cancel-order', orderNumber));
  };

  if (confirmError || orderDetailsError) {
    return <GeneralPaymentErrorPage />;
  }
  if (loadingOrderDetails || loadingConfirmPayment || isRedirecting || !orderDetailsData?.contractSigned) {
    return <LoadingPage />;
  }

  return getPaymentPage(
    orderDetailsData?.orderDetails?.orderType,
    orderNumber,
    orderDetailsData.contractSigned.isSigned,
    orderDetailsData?.orderDetails?.status,
    orderDetailsData?.contractAuthMethods ?? [],
    confirmPayment,
    handleSignContract,
    handleTerminate
  );
};

export const getPaymentPage = (
  orderType: OrderTypeEnum | undefined,
  orderNumber: string,
  contractSigned: boolean | null,
  status: OrderStatus | undefined | null,
  contractAuthMethods: ContractAuthMethods[],
  confirmPayment: () => void,
  signContract: (authMethod: string) => void,
  handleTerminate: () => void
): JSX.Element => {
  if (!status) {
    return <GeneralPaymentErrorPage />;
  }

  if (contractSigned !== null && !contractSigned) {
    return (
      <ContractPage
        orderNumber={orderNumber}
        handleSign={signContract}
        handleTerminate={handleTerminate}
        contractAuthMethods={contractAuthMethods}
      />
    );
  }

  switch (status) {
    case OrderStatus.WAITING:
      return <PaymentPage handlePay={confirmPayment} />;
    case OrderStatus.PAID:
      return <AlreadyPaidPage isAdditionalProduct={orderType === OrderTypeEnum.ADDITIONAL_PRODUCT} />;
    case OrderStatus.EXPIRED:
      return <PastDueDatePage />;
    default:
      return <GeneralPaymentErrorPage />;
  }
};

export default compose<Props, Props>(withMatchParamsHandlers)(PaymentPageContainer);

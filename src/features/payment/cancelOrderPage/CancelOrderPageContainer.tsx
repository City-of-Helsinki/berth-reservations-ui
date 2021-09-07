import { useMutation, useQuery } from '@apollo/react-hooks';
import { compose } from 'recompose';

import CancelOrderPage from './CancelOrderPage';
import { CANCEL_ORDER, GET_ORDER_DETAILS } from '../../queries';
import { getOrderNumber } from '../../../common/utils/urls';
import { isOrderBerthOrWinter } from '../../../common/utils/orders';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { CancelOrder, CancelOrderVariables } from '../../__generated__/CancelOrder';
import LoadingPage from '../../../common/loadingPage/LoadingPage';
import { OrderDetails, OrderDetailsVariables } from '../../__generated__/OrderDetails';
import GeneralPaymentErrorPage from '../paymentPage/paymentError/GeneralPaymentErrorPage';

type Props = {
  localePush: LocalePush;
};

const CancelOrderPageContainer = ({ localePush }: Props) => {
  const orderNumber = getOrderNumber(window.location.search);

  const { loading: loadingOrderDetails, data: orderDetailsData, error: orderDetailsError } = useQuery<
    OrderDetails,
    OrderDetailsVariables
  >(GET_ORDER_DETAILS, {
    variables: {
      orderNumber: orderNumber ?? '',
    },
    skip: !orderNumber,
  });

  const [cancelOrder, { loading }] = useMutation<CancelOrder, CancelOrderVariables>(CANCEL_ORDER, {
    variables: {
      cancelOrderMutationInput: {
        orderNumber: orderNumber ?? '',
      },
    },
  });

  if (loading || loadingOrderDetails) return <LoadingPage />;

  if (!orderDetailsData || orderDetailsError) return <GeneralPaymentErrorPage customMsg="" />;

  const handleCancel = () =>
    cancelOrder()
      .then(() => localePush('/order-cancelled'))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));

  const translationContext = isOrderBerthOrWinter(orderDetailsData.orderDetails?.orderType);

  return (
    <CancelOrderPage
      isApplicationOrder={!!orderDetailsData.orderDetails?.isApplicationOrder}
      translationContext={translationContext}
      handleCancel={handleCancel}
    />
  );
};

export default compose<Props, Props>(withMatchParamsHandlers)(CancelOrderPageContainer);

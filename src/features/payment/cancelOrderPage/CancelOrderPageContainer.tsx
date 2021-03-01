import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { compose } from 'recompose';

import CancelOrderPage from './CancelOrderPage';
import { CANCEL_ORDER } from '../../queries';
import { getOrderNumber } from '../../../common/utils/urls';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { CancelOrder, CancelOrderVariables } from '../../__generated__/CancelOrder';
import LoadingPage from '../../../common/loadingPage/LoadingPage';

type Props = {
  localePush: LocalePush;
};

const CancelOrderPageContainer = ({ localePush }: Props) => {
  const orderNumber = getOrderNumber(window.location.search);

  const [cancelOrder, { loading }] = useMutation<CancelOrder, CancelOrderVariables>(CANCEL_ORDER, {
    variables: {
      cancelOrderMutationInput: {
        orderNumber: orderNumber ?? '',
      },
    },
    onCompleted: () => {
      localePush('/order-cancelled');
    },
  });

  if (loading) {
    return <LoadingPage />;
  }

  const handleCancel = () =>
    cancelOrder()
      .then(() => localePush('/'))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));

  return <CancelOrderPage handleCancel={handleCancel} />;
};

export default compose<Props, Props>(withMatchParamsHandlers)(CancelOrderPageContainer);

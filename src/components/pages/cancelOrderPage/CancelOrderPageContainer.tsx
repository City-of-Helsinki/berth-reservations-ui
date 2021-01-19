import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { compose } from 'recompose';

import CancelOrderPage from './CancelOrderPage';
import { CANCEL_ORDER } from '../../../utils/graphql';
import { getOrderNumber } from '../../../utils/urls';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { CancelOrder, CancelOrderVariables } from '../../../utils/__generated__/CancelOrder';
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
      localePush('/');
    },
  });

  if (loading) {
    return <LoadingPage />;
  }

  const handleCancel = () =>
    cancelOrder()
      .then(() => localePush('/'))
      .catch((err) => console.error(err));

  return <CancelOrderPage handleCancel={handleCancel} />;
};

export default compose<Props, Props>(withMatchParamsHandlers)(CancelOrderPageContainer);

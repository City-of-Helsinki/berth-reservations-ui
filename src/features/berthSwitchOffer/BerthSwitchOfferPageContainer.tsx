import { useMutation, useQuery } from '@apollo/react-hooks';
import React from 'react';
import { compose } from 'recompose';

import LoadingPage from '../../common/loadingPage/LoadingPage';
import { LocalePush, withMatchParamsHandlers } from '../../common/utils/container';
import { getAccept, getOfferId } from '../../common/utils/urls';
import { AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables } from '../__generated__/AcceptBerthSwitchOffer';
import { SwitchOfferBerthDetails, SwitchOfferBerthDetailsVariables } from '../__generated__/SwitchOfferBerthDetails';
import BerthSwitchOfferPage from './BerthSwitchOfferPage';
import { ACCEPT_BERTH_SWITCH_OFFER, SWITCH_OFFER_BERTH_DETAILS } from '../queries';
import { getOfferBerthDetails } from './utils';

type Props = {
  localePush: LocalePush;
};

const BerthSwitchOfferPageContainer = ({ localePush }: Props) => {
  const offerId = getOfferId(window.location.search);
  const initialChoice = getAccept(window.location.search);

  const { data, loading } = useQuery<SwitchOfferBerthDetails, SwitchOfferBerthDetailsVariables>(
    SWITCH_OFFER_BERTH_DETAILS,
    {
      variables: {
        // offerId: offerId, TODO
        offerNumber: offerId,
      },
    }
  );
  const [acceptOfferMutation] = useMutation<AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables>(
    ACCEPT_BERTH_SWITCH_OFFER
  );

  const acceptOffer = (isAccepted: boolean) => {
    acceptOfferMutation({
      variables: {
        input: {
          offerNumber: offerId,
          isAccepted: isAccepted,
        },
      },
    }).then(() => localePush('/offer-thank-you'));
  };

  if (loading) return <LoadingPage />;
  const berthDetails = getOfferBerthDetails(data);

  return (
    <BerthSwitchOfferPage
      berthDetails={berthDetails}
      initialChoice={initialChoice}
      onConfirm={(isAccepted) => acceptOffer(isAccepted)}
    />
  );
};

export default compose<Props, Props>(withMatchParamsHandlers)(BerthSwitchOfferPageContainer);

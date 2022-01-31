import { useMutation, useQuery } from '@apollo/react-hooks';
import { compose } from 'recompose';

import { LocalePush, withMatchParamsHandlers } from '../../common/utils/container';
import { getAccept, getOfferNumber } from '../../common/utils/urls';
import { AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables } from '../__generated__/AcceptBerthSwitchOffer';
import BerthSwitchOfferPage from './BerthSwitchOfferPage';
import { ACCEPT_BERTH_SWITCH_OFFER, OFFER_DETAILS } from '../queries';
import LoadingPage from '../../common/loadingPage/LoadingPage';
import { OfferDetails, OfferDetailsVariables } from '../__generated__/OfferDetails';
import GeneralOfferErrorPage from './offerError/GeneralOfferErrorPage';

type Props = {
  localePush: LocalePush;
};

const BerthSwitchOfferPageContainer = ({ localePush }: Props) => {
  const offerNumber = getOfferNumber(window.location.search);
  const initialChoice = getAccept(window.location.search);

  const { data, loading } = useQuery<OfferDetails, OfferDetailsVariables>(OFFER_DETAILS, {
    variables: {
      offerNumber,
    },
  });

  const [acceptOfferMutation] = useMutation<AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables>(
    ACCEPT_BERTH_SWITCH_OFFER
  );

  const acceptOffer = (isAccepted: boolean) => {
    acceptOfferMutation({
      variables: {
        input: {
          offerNumber,
          isAccepted,
        },
      },
    }).then(() => localePush('/offer-thank-you'));
  };

  if (loading) return <LoadingPage />;

  const berthDetails = data?.offerDetails;

  if (!berthDetails) {
    return <GeneralOfferErrorPage />;
  }

  return (
    <BerthSwitchOfferPage
      berthDetails={berthDetails}
      initialChoice={initialChoice}
      onConfirm={(isAccepted) => acceptOffer(isAccepted)}
    />
  );
};

export default compose<Props, Props>(withMatchParamsHandlers)(BerthSwitchOfferPageContainer);

import { useMutation } from '@apollo/react-hooks';
import { compose } from 'recompose';

import { LocalePush, withMatchParamsHandlers } from '../../common/utils/container';
import { getAccept, getOfferNumber } from '../../common/utils/urls';
import { AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables } from '../__generated__/AcceptBerthSwitchOffer';
import BerthSwitchOfferPage from './BerthSwitchOfferPage';
import { ACCEPT_BERTH_SWITCH_OFFER } from '../queries';

type Props = {
  localePush: LocalePush;
};

const BerthSwitchOfferPageContainer = ({ localePush }: Props) => {
  const offerNumber = getOfferNumber(window.location.search);
  const initialChoice = getAccept(window.location.search);

  // TODO
  // const { data, loading } = useQuery<SwitchOfferBerthDetails, SwitchOfferBerthDetailsVariables>(
  //   SWITCH_OFFER_BERTH_DETAILS,
  //   {
  //     variables: {
  //       offerNumber,
  //     },
  //   }
  // );
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

  // TODO
  // if (loading) return <LoadingPage />;
  // const berthDetails = getOfferBerthDetails(data);
  const berthDetails = {
    harbor: '?',
    pier: '?',
    berth: '?',
  };

  return (
    <BerthSwitchOfferPage
      berthDetails={berthDetails}
      initialChoice={initialChoice}
      onConfirm={(isAccepted) => acceptOffer(isAccepted)}
    />
  );
};

export default compose<Props, Props>(withMatchParamsHandlers)(BerthSwitchOfferPageContainer);

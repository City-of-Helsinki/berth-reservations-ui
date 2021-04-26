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

  const [acceptOfferMutation] = useMutation<AcceptBerthSwitchOffer, AcceptBerthSwitchOfferVariables>(
    ACCEPT_BERTH_SWITCH_OFFER
  );

  const acceptOffer = (isAccepted: boolean) => {
    acceptOfferMutation({
      variables: {
        input: {
          offerNumber: offerNumber,
          isAccepted: isAccepted,
        },
      },
    }).then(() => localePush('/offer-thank-you'));
  };

  return <BerthSwitchOfferPage initialChoice={initialChoice} onConfirm={(isAccepted) => acceptOffer(isAccepted)} />;
};

export default compose<Props, Props>(withMatchParamsHandlers)(BerthSwitchOfferPageContainer);

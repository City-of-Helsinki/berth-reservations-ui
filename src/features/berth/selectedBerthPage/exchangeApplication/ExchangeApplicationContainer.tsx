import React from 'react';
import { useQuery } from 'react-apollo';

import {
  BerthSwitchReasonsQuery,
  BerthSwitchReasonsQuery_berthSwitchReasons as Reason,
} from '../../../__generated__/BerthSwitchReasonsQuery';
import { BERTH_SWITCH_REASONS_QUERY } from '../../../queries';
import ExchangeApplication, { ExchangeApplicationProps } from './ExchangeApplication';

type Props = Omit<ExchangeApplicationProps, 'reasons'>;

const isReason = (reason: Reason | null): reason is Reason => reason !== null;

const ExchangeApplicationContainer = (props: Props) => {
  const { data } = useQuery<BerthSwitchReasonsQuery>(BERTH_SWITCH_REASONS_QUERY);
  const reasons = data?.berthSwitchReasons ? data.berthSwitchReasons.filter(isReason) : [];

  return <ExchangeApplication reasons={reasons} {...props} />;
};

export default ExchangeApplicationContainer;

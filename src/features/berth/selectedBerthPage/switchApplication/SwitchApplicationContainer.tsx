import React from 'react';
import { useQuery } from 'react-apollo';

import {
  BerthSwitchReasonsQuery,
  BerthSwitchReasonsQuery_berthSwitchReasons as Reason,
} from '../../../__generated__/BerthSwitchReasonsQuery';
import { BERTH_SWITCH_REASONS_QUERY } from '../../../queries';
import SwitchApplication, { SwitchApplicationProps } from './SwitchApplication';

type Props = Omit<SwitchApplicationProps, 'reasons'>;

const isReason = (reason: Reason | null): reason is Reason => reason !== null;

const SwitchApplicationContainer = (props: Props) => {
  const { data } = useQuery<BerthSwitchReasonsQuery>(BERTH_SWITCH_REASONS_QUERY);
  const reasons = data?.berthSwitchReasons ? data.berthSwitchReasons.filter(isReason) : [];

  return <SwitchApplication reasons={reasons} {...props} />;
};

export default SwitchApplicationContainer;

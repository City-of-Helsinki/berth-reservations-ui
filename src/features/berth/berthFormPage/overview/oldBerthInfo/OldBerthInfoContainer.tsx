import React from 'react';
import { useQuery } from 'react-apollo';

import { BerthQuery } from '../../../../__generated__/BerthQuery';
import { BERTH_SWITCH_REASONS_QUERY, GET_BERTH } from '../../../../queries';
import { ApplicationState } from '../../../../../redux/types';
import {
  BerthSwitchReasonsQuery,
  BerthSwitchReasonsQuery_berthSwitchReasons as Reason,
} from '../../../../__generated__/BerthSwitchReasonsQuery';
import OldBerthInfo from './OldBerthInfo';

type OldBerthInfoContainerProps = {
  application: ApplicationState;
};

const OldBerthInfoContainer = ({ application }: OldBerthInfoContainerProps) => {
  const isReason = (reason: Reason | null): reason is Reason => reason !== null;

  const { data: berthData } = useQuery<BerthQuery, { id: string }>(GET_BERTH(application.berthSwitch.berthId));
  const harborName = berthData?.berth?.pier?.properties?.harbor.properties?.name ?? '';
  const pier = berthData?.berth?.pier?.properties?.identifier ?? '';
  const berthNumber = berthData?.berth?.number ?? '';

  const { data: reasonData } = useQuery<BerthSwitchReasonsQuery>(BERTH_SWITCH_REASONS_QUERY);
  const reasons = reasonData?.berthSwitchReasons ? reasonData.berthSwitchReasons.filter(isReason) : [];
  const selectedReason = reasons.find((reason) => reason.id === application.berthSwitch.reason);

  return (
    <OldBerthInfo harborName={harborName} pier={pier} berthNumber={berthNumber} reasonTitle={selectedReason?.title} />
  );
};

export default OldBerthInfoContainer;

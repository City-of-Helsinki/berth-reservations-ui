import React from 'react';
import { useQuery } from 'react-apollo';

import { BoatTypesBerthsQuery_harbors_edges_node as Harbor } from '../../../../__generated__/BoatTypesBerthsQuery';
import { BERTH_SWITCH_REASONS_QUERY, GET_HARBOR_NAME } from '../../../../queries';
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

  const { data: harborData } = useQuery<Harbor, { id: string }>(GET_HARBOR_NAME(application.berthSwitch.harborId));
  const harborName = harborData?.properties?.name || application.berthSwitch.harborId;

  const { data: reasonData } = useQuery<BerthSwitchReasonsQuery>(BERTH_SWITCH_REASONS_QUERY);
  const reasons = reasonData?.berthSwitchReasons ? reasonData.berthSwitchReasons.filter(isReason) : [];
  const selectedReason = reasons.find((reason) => reason.id === application.berthSwitch.reason);

  return (
    <OldBerthInfo
      harborName={harborName}
      pier={application.berthSwitch.pier}
      berthNumber={application.berthSwitch.berthNumber}
      reasonTitle={selectedReason?.title}
    />
  );
};

export default OldBerthInfoContainer;

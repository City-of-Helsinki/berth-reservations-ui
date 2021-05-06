import React from 'react';

import { BerthSwitchState } from '../../../../../redux/types';
import OldBerthInfo from './OldBerthInfo';

type OldBerthInfoContainerProps = {
  berthSwitch: BerthSwitchState;
};

const OldBerthInfoContainer = ({ berthSwitch }: OldBerthInfoContainerProps) => {
  const harborName = berthSwitch.harbor?.label ?? '';
  const pier = berthSwitch.pier?.label ?? '';
  const berthNumber = berthSwitch.berth?.label ?? '';
  const reasonTitle = berthSwitch.reason?.label;

  return <OldBerthInfo harborName={harborName} pier={pier} berthNumber={berthNumber} reasonTitle={reasonTitle} />;
};

export default OldBerthInfoContainer;

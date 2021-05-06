import { List, Record } from 'immutable';
import { createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { BerthSwitchState, BerthsState, FormsState, WinterAreasState } from '../types';

const BerthsTransform = createTransform(
  (inboundState: BerthsState) => {
    const { applicationType, selectedServices, selectedHarbors, berthLimit } = inboundState.toObject();

    return {
      applicationType,
      berthLimit,
      selectedServices: selectedServices.toObject(),
      selectedHarbors: selectedHarbors.toArray(),
    };
  },
  (outboundState) => {
    const berths = Record({
      applicationType: outboundState.applicationType,
      selectedServices: Record(outboundState.selectedServices)(),
      selectedHarbors: List(outboundState.selectedHarbors),
      berthLimit: outboundState.berthLimit,
    });
    return berths();
  },
  { whitelist: ['berths'] }
);

const WinterAreasTransform = createTransform(
  (inboundState: WinterAreasState) => {
    const { selectedWinterServices, selectedWinterAreas, areasLimit } = inboundState.toObject();

    return {
      areasLimit,
      selectedWinterServices: selectedWinterServices.toObject(),
      selectedWinterAreas: selectedWinterAreas.toArray(),
    };
  },
  (outboundState) => {
    const berths = Record({
      selectedWinterServices: Record(outboundState.selectedWinterServices)(),
      selectedWinterAreas: List(outboundState.selectedWinterAreas),
      areasLimit: outboundState.areasLimit,
    });
    return berths();
  },
  { whitelist: ['winterAreas'] }
);

const FormsTransform = createTransform(
  (inboundState: FormsState) => {
    return inboundState.toObject();
  },
  (outboundState) => {
    const forms = Record(outboundState);
    return forms();
  },
  { whitelist: ['forms'] }
);

const BerthSwitchTransform = createTransform(
  (inboundState: BerthSwitchState) => {
    return inboundState.toObject();
  },
  (outboundState) => {
    const berthSwitch = Record(outboundState);
    return berthSwitch();
  },
  { whitelist: ['berthSwitch'] }
);

const persist = {
  storage,
  key: 'root',
  transforms: [BerthsTransform, WinterAreasTransform, FormsTransform, BerthSwitchTransform],
  whitelist: ['berths', 'winterAreas', 'forms', 'berthSwitch'],
};

export default persist;

import { List, Record } from 'immutable';

import { createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BerthsState, FormsState, WinterAreasState } from '../types';

const BerthsTransform = createTransform(
  (inboundState: BerthsState) => {
    const { selectedServices, selectedBerths } = inboundState.toObject();

    return {
      selectedServices: selectedServices.toObject(),
      selectedBerths: selectedBerths.toArray()
    };
  },
  outboundState => {
    const berths = Record({
      selectedServices: Record(outboundState.selectedServices)(),
      selectedBerths: List(outboundState.selectedBerths)
    });
    return berths();
  },
  { whitelist: ['berths'] }
);

const WinterAreasTransform = createTransform(
  (inboundState: WinterAreasState) => {
    const { selectedWinterServices, selectedWinterAreas } = inboundState.toObject();

    return {
      selectedWinterServices: selectedWinterServices.toObject(),
      selectedWinterAreas: selectedWinterAreas.toArray()
    };
  },
  outboundState => {
    const berths = Record({
      selectedWinterServices: Record(outboundState.selectedWinterServices)(),
      selectedWinterAreas: List(outboundState.selectedWinterAreas)
    });
    return berths();
  },
  { whitelist: ['winterAreas'] }
);

const FormsTransform = createTransform(
  (inboundState: FormsState) => {
    const forms = inboundState.toObject();

    return forms;
  },
  outboundState => {
    const forms = Record(outboundState);
    return forms();
  },
  { whitelist: ['forms'] }
);

export default {
  storage,
  key: 'root',
  transforms: [BerthsTransform, WinterAreasTransform, FormsTransform]
};

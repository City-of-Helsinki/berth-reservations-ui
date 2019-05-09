import { List, Record } from 'immutable';

import { createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ApplicationState, BerthsState, FormsState, WinterAreasState } from '../types';

const BerthsTransform = createTransform(
  (inboundState: BerthsState) => {
    const { selectedServices, selectedBerths, berthLimit } = inboundState.toObject();

    return {
      berthLimit,
      selectedServices: selectedServices.toObject(),
      selectedBerths: selectedBerths.toArray()
    };
  },
  outboundState => {
    const berths = Record({
      selectedServices: Record(outboundState.selectedServices)(),
      selectedBerths: List(outboundState.selectedBerths),
      berthLimit: outboundState.berthLimit
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
      selectedWinterAreas: selectedWinterAreas.toArray()
    };
  },
  outboundState => {
    const berths = Record({
      selectedWinterServices: Record(outboundState.selectedWinterServices)(),
      selectedWinterAreas: List(outboundState.selectedWinterAreas),
      areasLimit: outboundState.areasLimit
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

const ApplicationTransform = createTransform(
  (inboundState: ApplicationState) => {
    const application = inboundState.toObject();

    return application;
  },
  outboundState => {
    const application = Record(outboundState);
    return application();
  },
  { whitelist: ['application'] }
);

export default {
  storage,
  key: 'root',
  transforms: [BerthsTransform, WinterAreasTransform, FormsTransform, ApplicationTransform],
  whitelist: ['berths', 'winterAreas', 'forms', 'application']
};

import { List, Record } from 'immutable';

import { createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ApplicationState, BerthsState, FormsState } from '../types';

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
  transforms: [BerthsTransform, FormsTransform, ApplicationTransform],
  whitelist: ['forms', 'berths', 'application']
};

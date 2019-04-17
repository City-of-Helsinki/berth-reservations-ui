import { List, Record } from 'immutable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import * as ducks from '../ducks';

import { BerthsState, FormsState } from '../types/ducks';

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

const persistConfig = {
  storage,
  key: 'root',
  transforms: [BerthsTransform, FormsTransform]
};

const enhancers: any[] = [];
const middlewares = [thunk, promiseMiddleware()];
const rootReducer = combineReducers(ducks);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares), ...enhancers);

export default () => {
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};

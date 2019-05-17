import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistReducer, persistStore } from 'redux-persist';

import { routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import persistConfig from './persist';

export const history = createBrowserHistory();

const enhancers: any[] = [];
const middlewares = [routerMiddleware(history), thunk, promiseMiddleware()];

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares), ...enhancers);

export default () => {
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};

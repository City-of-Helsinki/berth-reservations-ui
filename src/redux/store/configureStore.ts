import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistReducer, persistStore } from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import persistConfig from './persist';

const enhancers: any[] = [];
const middlewares = [thunk, promiseMiddleware()];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares), ...enhancers);

export default () => {
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};

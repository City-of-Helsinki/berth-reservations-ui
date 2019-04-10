import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import * as ducks from '../ducks';

const enhancers: any[] = [];
const middlewares = [thunk, promiseMiddleware()];
const rootReducer = combineReducers(ducks);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares), ...enhancers);

export default () => createStore(rootReducer, composedEnhancers);

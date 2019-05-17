import { createMatchSelector } from 'connected-react-router';
import { createSelector } from 'reselect';
import { Store } from '../types';

export const pathNameSelector = createSelector(
  (state: Store) => state.router.location.pathname,
  pathname => pathname
);

export const paramsSelector = createSelector(
  pathNameSelector,
  pathName => createMatchSelector(pathName)
);

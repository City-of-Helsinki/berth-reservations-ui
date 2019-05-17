import { createSelector } from 'reselect';
import { Store } from '../types';

export const stepsSelector = createSelector(
  (state: Store) => state.steps.steps,
  steps => steps
);

import { List } from 'immutable';

export interface HarborOption {
  id: string;
  name: string;
}

export type HarborOptions = List<HarborOption>;

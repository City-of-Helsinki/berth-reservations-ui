// @flow
import type { RecordOf, List } from 'immutable';
import type { Berths as Bs } from './berths';

export type Forms = RecordOf<{
  values: Object,
  step: number,
  done: boolean
}>;

export type Berths = RecordOf<{
  berths: Bs,
  selectedBerths: List<string>
}>;

export type Action = {
  type: string,
  payload: any
};

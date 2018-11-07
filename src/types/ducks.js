// @flow
import type { RecordOf } from 'immutable';
import type { Berths as Bs, SelectedBerths } from './berths';

export type FormsState = RecordOf<{
  values: Object,
  step: number,
  done: boolean
}>;

export type Berths = RecordOf<{
  berths: Bs,
  selectedBerths: SelectedBerths
}>;

export type Action = {
  type: string,
  payload: any
};

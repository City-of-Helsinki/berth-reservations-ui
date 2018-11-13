// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import type { Berths as Bs, SelectedBerths } from './berths';

type FormProps = {
  values: Object,
  step: number,
  done: boolean
};

type BerthsProps = {
  berths: Bs,
  selectedBerths: SelectedBerths
};

export type FormsFactory = RecordFactory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = RecordFactory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;

export type Action = {
  type: string,
  payload: any
};

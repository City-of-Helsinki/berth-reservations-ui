import { RecordOf, Record } from 'immutable';
import { Berths as Bs, SelectedBerths } from './berths';
import { BoatTypes } from './boatTypes';
import { SelectedServices } from './services';

type FormProps = {
  values: Object;
  boatTypes: BoatTypes;
};

type BerthsProps = {
  berths: Bs;
  selectedBerths: SelectedBerths;
  selectedServices: SelectedServices;
};

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;

export type Store = {
  forms: FormsState;
  berths: BerthsState;
};

export type Action = {
  type: string;
  payload: any;
};

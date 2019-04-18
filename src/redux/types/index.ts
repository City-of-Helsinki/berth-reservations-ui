import { Record, RecordOf } from 'immutable';
import { Berths } from '../../components/berths/types';
import { SelectedServices } from '../../types/services';

interface FormProps {
  values: object;
}

interface BerthsProps {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
}

export interface Action {
  type: string;
  payload: any;
}

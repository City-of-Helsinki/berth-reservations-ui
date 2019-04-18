import { Record, RecordOf } from 'immutable';
import { SelectedBerths } from '../../components/berths/types';
import { SelectedServices } from '../../types/services';

interface FormProps {
  values: object;
}

interface BerthsProps {
  selectedBerths: SelectedBerths;
  selectedServices: SelectedServices;
}

interface UIProps {
  selectedApplicationType: string;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;
export type UIState = RecordOf<UIProps>;
export type UIFactory = Record.Factory<UIProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  ui: UIState;
}

export interface Action {
  type: string;
  payload: any;
}

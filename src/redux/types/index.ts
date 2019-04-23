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

interface ApplicationProps {
  selectedApplicationType: string;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;
export type ApplicationState = RecordOf<ApplicationProps>;
export type ApplicationFactory = Record.Factory<ApplicationProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  application: ApplicationState;
}

export interface Action {
  type: string;
  payload: any;
}

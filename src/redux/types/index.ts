import { Record, RecordOf } from 'immutable';
import { Berths } from '../../components/berths/types';
import { SelectedServices, SelectedWinterServices } from '../../types/services';

interface FormProps {
  values: object;
}

interface BerthsProps {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  berthLimit: number;
}

interface ApplicationProps {
  selectedApplicationType: string;
  berthSwitch: object;
}

interface WinterAreasProps {
  selectedWinterAreas: Berths;
  selectedWinterServices: SelectedWinterServices;
  areasLimit: number;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;
export type WinterAreasFactory = Record.Factory<WinterAreasProps>;
export type WinterAreasState = RecordOf<WinterAreasProps>;
export type ApplicationState = RecordOf<ApplicationProps>;
export type ApplicationFactory = Record.Factory<ApplicationProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  winterAreas: WinterAreasState;
  application: ApplicationState;
}

export interface Action {
  type: string;
  payload: any;
}

import { Record, RecordOf } from 'immutable';
import { BerthSwitchInput } from '../../__generated__/globalTypes';
import { Berths } from '../../components/berths/types';
import { ApplicationOptions } from '../../types/applicationType';
import { SelectedServices, SelectedWinterServices } from '../../types/services';

interface FormProps {
  values: object;
}

interface BerthsProps {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  berthLimit: number;
}

export interface ApplicationProps {
  berthSwitch: BerthSwitchInput;
  selectedApplicationType: ApplicationOptions;
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

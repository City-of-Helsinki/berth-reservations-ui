import { List, Record, RecordOf } from 'immutable';
import { BerthSwitchInput } from '../../__generated__/globalTypes';
import { Berths } from '../../components/berths/types';
import { Step } from '../../components/steps/StepTypes';
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

export interface StepsProps {
  winterSteps: List<Step>;
  berthSteps: List<Step>;
  currentBerthStep: number;
  currentWinterStep: number;
  boatTab: number;
  applicantTab: number;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;
export type WinterAreasFactory = Record.Factory<WinterAreasProps>;
export type WinterAreasState = RecordOf<WinterAreasProps>;
export type ApplicationState = RecordOf<ApplicationProps>;
export type ApplicationFactory = Record.Factory<ApplicationProps>;
export type StepsState = RecordOf<StepsProps>;
export type StepsFactory = Record.Factory<StepsProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  winterAreas: WinterAreasState;
  application: ApplicationState;
  steps: StepsState;
}

export interface Action {
  type: string;
  payload: any;
}

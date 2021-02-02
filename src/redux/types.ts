import { Record, RecordOf } from 'immutable';

import { BerthSwitchInput } from '../__generated__/globalTypes';
import { SelectedIds } from '../common/types/resource';
import { ApplicationOptions } from '../common/types/applicationType';
import { BerthFormValues } from '../features/berthApplication/types';
import { SelectedServices, SelectedWinterServices } from '../common/types/services';
import { UnmarkedWinterFormValues } from '../features/unmarkedWinterStorageApplication/types';
import { WinterFormValues } from '../features/winterStorageApplication/types';

interface FormProps {
  berthValues: BerthFormValues;
  winterValues: WinterFormValues;
  unmarkedWinterValues: UnmarkedWinterFormValues;
}

interface BerthsProps {
  selectedBerths: SelectedIds;
  selectedServices: SelectedServices;
  berthLimit: number;
}

export interface ApplicationProps {
  berthSwitch: BerthSwitchInput;
  berthsApplicationType: ApplicationOptions;
}

export interface WinterAreasProps {
  selectedWinterAreas: SelectedIds;
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

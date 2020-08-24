import { Record, RecordOf } from 'immutable';

import { BerthSwitchInput } from '../../__generated__/globalTypes';
import { SelectedIds } from '../../components/berths/types';
import { ApplicationOptions } from '../../types/applicationType';
import { BerthFormValues } from '../../types/berth';
import { SelectedServices, SelectedWinterServices } from '../../types/services';
import { UnmarkedWinterFormValues } from '../../types/unmarkedWinterStorage';
import { WinterFormValues } from '../../types/winterStorage';
import { StorageAreaFilter } from '../reducers/WinterAreaReducers';

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
  storageAreaFilter: StorageAreaFilter;
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

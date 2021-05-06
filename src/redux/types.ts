import { Record, RecordOf } from 'immutable';

import { SelectedIds } from '../common/types/resource';
import { ApplicationOptions } from '../common/types/applicationType';
import { BerthOption, HarborOption, PierOption, ReasonOption } from '../features/berth/selectedBerthPage/types';
import { BerthFormValues } from '../features/berth/types';
import { SelectedServices, SelectedWinterServices } from '../common/types/services';
import { UnmarkedWinterFormValues } from '../features/unmarkedWinterStorage/types';
import { WinterFormValues } from '../features/winterStorage/types';

interface FormProps {
  berthValues: BerthFormValues;
  winterValues: WinterFormValues;
  unmarkedWinterValues: UnmarkedWinterFormValues;
}

export interface BerthsProps {
  applicationType: ApplicationOptions;
  selectedHarbors: SelectedIds;
  selectedServices: SelectedServices;
  berthLimit: number;
}

export interface BerthSwitchProps {
  berth: BerthOption | null;
  pier: PierOption | null;
  harbor: HarborOption | null;
  reason: ReasonOption | null;
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
export type BerthSwitchState = RecordOf<BerthSwitchProps>;
export type BerthSwitchFactory = Record.Factory<BerthSwitchProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  winterAreas: WinterAreasState;
  berthSwitch: BerthSwitchState;
}

export interface Action {
  type: string;
  payload: any;
}

import { Record, RecordOf } from 'immutable';
import { Berths } from '../../components/berths/types';
import { SelectedServices, SelectedWinterServices } from '../../types/services';

interface FormProps {
  values: object;
}

interface BerthsProps {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
}

interface WinterAreasProps {
  selectedWinterAreas: Berths;
  selectedWinterServices: SelectedWinterServices;
}

export type FormsFactory = Record.Factory<FormProps>;
export type FormsState = RecordOf<FormProps>;
export type BerthsFactory = Record.Factory<BerthsProps>;
export type BerthsState = RecordOf<BerthsProps>;
export type WinterAreasFactory = Record.Factory<WinterAreasProps>;
export type WinterAreasState = RecordOf<WinterAreasProps>;

export interface Store {
  forms: FormsState;
  berths: BerthsState;
  winterAreas: WinterAreasState;
}

export interface Action {
  type: string;
  payload: any;
}

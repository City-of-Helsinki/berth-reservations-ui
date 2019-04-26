import { Record, RecordOf } from 'immutable';

export interface SelectedServicesProps {
  electricity: boolean;
  water: boolean;
  wasteCollection: boolean;
  gate: boolean;
  lighting: boolean;
}

export type SelectedServicesFactory = Record.Factory<SelectedServicesProps>;
export type SelectedServices = RecordOf<SelectedServicesProps>;

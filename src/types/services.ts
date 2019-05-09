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
export type BerthsServices = keyof SelectedServicesProps;

interface SelectedWinterServicesProps {
  electricity: boolean;
  water: boolean;
  gate: boolean;
  numberOfMarkedPlaces: boolean;
  repairArea: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
}

export type SelectedWinterServicesFactory = Record.Factory<SelectedWinterServicesProps>;
export type SelectedWinterServices = RecordOf<SelectedWinterServicesProps>;
export type WinterServices = keyof SelectedWinterServicesProps;

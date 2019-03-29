import { RecordOf, Record } from 'immutable';

type SelectedServicesProps = {
  electricity: boolean;
  water: boolean;
  waste_collection: boolean;
  gate: boolean;
  lighting: boolean;
};

export type SelectedServicesFactory = Record.Factory<SelectedServicesProps>;
export type SelectedServices = RecordOf<SelectedServicesProps>;

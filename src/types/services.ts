// @flow
import type { RecordOf, RecordFactory } from 'immutable';

type SelectedServicesProps = {
  electricity: boolean,
  water: boolean,
  waste_collection: boolean,
  gate: boolean,
  lighting: boolean
};

export type SelectedServicesFactory = RecordFactory<SelectedServicesProps>;
export type SelectedServices = RecordOf<SelectedServicesProps>;

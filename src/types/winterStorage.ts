import { WinterStorageApplicationInput } from '../__generated__/globalTypes';
import {
  WinterAreasQuery_winterStorageAreas_edges_node,
  WinterAreasQuery_winterStorageAreas_edges_node_geometry,
  WinterAreasQuery_winterStorageAreas_edges_node_properties
} from '../utils/__generated__/WinterAreasQuery';

export type WinterStorageType = Pick<
  WinterAreasQuery_winterStorageAreas_edges_node_properties,
  Exclude<keyof WinterAreasQuery_winterStorageAreas_edges_node_properties, '__typename'>
> & {
  geometry: Pick<
    WinterAreasQuery_winterStorageAreas_edges_node_geometry,
    Exclude<keyof WinterAreasQuery_winterStorageAreas_edges_node_geometry, '__typename'>
  >;
} & Pick<WinterAreasQuery_winterStorageAreas_edges_node, 'id'> &
  Pick<WinterAreasQuery_winterStorageAreas_edges_node, '__typename'>;

interface ValuesToOverride {
  boatLength: string;
  boatWidth: string;
}

interface AdditionalValues {
  boatStoredOnTrailer: boolean;
}

export type WinterFormValues = Pick<
  WinterStorageApplicationInput,
  Exclude<keyof WinterStorageApplicationInput, keyof ValuesToOverride>
> &
  ValuesToOverride &
  AdditionalValues;

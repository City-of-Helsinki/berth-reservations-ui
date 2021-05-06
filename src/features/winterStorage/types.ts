import { List } from 'immutable';

import { WinterStorageApplicationInput } from '../../__generated__/globalTypes';
import {
  WinterAreasQuery_winterStorageAreas_edges_node,
  WinterAreasQuery_winterStorageAreas_edges_node_properties as AreaProperties,
} from '../__generated__/WinterAreasQuery';

export type WinterStorageAreaType = {
  __typename: WinterAreasQuery_winterStorageAreas_edges_node['__typename'];
  id: string;
  geometry: {
    coordinates: any | null;
  };
  availabilityLevel: AreaProperties['availabilityLevel'];
  estimatedNumberOfSectionSpaces: AreaProperties['estimatedNumberOfSectionSpaces'];
  estimatedNumberOfUnmarkedSpaces: AreaProperties['estimatedNumberOfUnmarkedSpaces'];
  imageFile: AreaProperties['imageFile'];
  maxLength: AreaProperties['maxLength'];
  maxLengthOfSectionSpaces: AreaProperties['maxLengthOfSectionSpaces'];
  maxWidth: AreaProperties['maxWidth'];
  municipality: AreaProperties['municipality'];
  name: AreaProperties['name'];
  servicemapId: AreaProperties['servicemapId'];
  streetAddress: AreaProperties['streetAddress'];
  wwwUrl: AreaProperties['wwwUrl'];
  zipCode: AreaProperties['zipCode'];
  electricity: boolean;
  water: boolean;
  gate: boolean;
  summerStorageForDockingEquipment: boolean;
  summerStorageForTrailers: boolean;
  summerStorageForBoats: boolean;
};

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

export type WinterStorageAreas = List<WinterStorageAreaType>;

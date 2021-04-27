import { List } from 'immutable';

import { BerthApplicationInput } from '../../__generated__/globalTypes';
import {
  HarborsQuery_harbors_edges_node,
  HarborsQuery_harbors_edges_node_properties as BerthProperties,
} from '../__generated__/HarborsQuery';

export type HarborType = {
  __typename: HarborsQuery_harbors_edges_node['__typename'];
  id: string;
  geometry: {
    coordinates: any | null;
  };
  availabilityLevel: BerthProperties['availabilityLevel'];
  email: BerthProperties['email'];
  imageFile: BerthProperties['imageFile'];
  maxDepth: BerthProperties['maxDepth'];
  maxLength: BerthProperties['maxLength'];
  maxWidth: BerthProperties['maxWidth'];
  municipality: BerthProperties['municipality'];
  name: BerthProperties['name'];
  numberOfPlaces: BerthProperties['numberOfPlaces'];
  phone: BerthProperties['phone'];
  servicemapId: BerthProperties['servicemapId'];
  streetAddress: BerthProperties['streetAddress'];
  wwwUrl: BerthProperties['wwwUrl'];
  zipCode: BerthProperties['zipCode'];
  mooring: boolean;
  electricity: boolean;
  water: boolean;
  wasteCollection: boolean;
  gate: boolean;
  lighting: boolean;
  suitableBoatTypes: string[];
};

interface ValuesToOverride {
  boatLength: string;
  boatWidth: string;
  boatDraught: string;
  boatWeight: string;
}

export type BerthFormValues = Pick<
  BerthApplicationInput,
  Exclude<keyof BerthApplicationInput, keyof ValuesToOverride>
> &
  ValuesToOverride;

export type Harbors = List<HarborType>;

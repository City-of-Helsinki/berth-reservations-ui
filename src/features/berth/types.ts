import { List } from 'immutable';

import { BerthApplicationInput } from '../../__generated__/globalTypes';
import {
  HarborsQuery_harbors_edges_node,
  HarborsQuery_harbors_edges_node_properties as BerthProperties,
} from '../__generated__/HarborsQuery';
import { Option } from './berthFormPage/switchApplication/types';

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

interface BerthSwitch {
  berth: Option;
  reason?: Option | null;
}

export type BerthFormValues = Pick<
  BerthApplicationInput,
  Exclude<keyof BerthApplicationInput, keyof ValuesToOverride>
> & { berthSwitch?: BerthSwitch } & ValuesToOverride;

export type Harbors = List<HarborType>;

export type { MyBoatsQuery, MyBoatsQuery_myProfile_boats_edges_node as Boat } from '../__generated__/MyBoatsQuery';

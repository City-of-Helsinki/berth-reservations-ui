// @flow
import type { List } from 'immutable';

type Multilingual = {
  fi: string,
  sv: string
};

export type Berth = {
  identifier: string,
  name: Multilingual,
  street_address: Multilingual,
  municipality: Multilingual,
  zip_code: string,
  phone: string,
  email: string,
  www_url: string,
  location: {
    type: string,
    coordinates: Array<number>
  },
  image: string,
  image_link: string,
  electricity: boolean,
  water: boolean,
  waste_collection: boolean,
  gate: boolean,
  lighting: boolean,
  number_of_places: number,
  maximum_depth: number,
  maximum_width: number,
  availability_level: string
};

export type Berths = List<Berth>;
export type SelectedBerths = List<string>;

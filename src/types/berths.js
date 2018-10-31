// @flow
import type { List } from 'immutable';

type Multilingual = {
  fi: string,
  sv: string
};

export type Berth = {
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
  image_file: string,
  image_link: string,
  mooring: boolean,
  electricity: boolean,
  water: boolean,
  waste_collection: boolean,
  gate: boolean,
  lighting: boolean,
  number_of_places: number,
  maximum_depth: number,
  maximum_width: number
};

export type Berths = List<Berth>;

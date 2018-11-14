// @flow
import { List } from 'immutable';
import { get } from '../utils/api';
import type { Berths } from '../types/berths';
import type { BoatTypes } from '../types/boatTypes';

export default {
  getBoatTypes: async (): Promise<BoatTypes> => {
    const data = await get('boat-types');
    return data.results;
  },
  getBerths: async (): Promise<Berths> => {
    const data = await get('harbors');
    return List(data.results);
  }
};

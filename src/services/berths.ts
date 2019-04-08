import { Berth } from '../components/berths/Berth/types';
import { Berths } from '../components/berths/types';

import { List } from 'immutable';
import { BoatTypes } from '../types/boatTypes';
import { get } from '../utils/api';

export default {
  getBoatTypes: async (): Promise<BoatTypes> => {
    const data = await get('boat-types');
    return data.results;
  },
  getBerths: async (): Promise<Berths> => {
    const data = await get('harbors');
    return List(
      data.results.map((berth: Berth) => ({
        ...berth,
        maximumWidth: berth.maximumWidth / 100,
        maximumLength: berth.maximumLength / 100,
        location: {
          coordinates: berth.location.coordinates.reverse()
        }
      }))
    );
  }
};

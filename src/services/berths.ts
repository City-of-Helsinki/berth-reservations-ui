import { List } from 'immutable';
import { Berth, Berths } from '../types/berths';
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
        maximum_width: berth.maximum_width / 100,
        maximum_length: berth.maximum_length / 100,
        location: {
          coordinates: berth.location.coordinates.reverse()
        }
      }))
    );
  }
};

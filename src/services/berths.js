// @flow
import { List } from 'immutable';
import { get } from '../utils/api';
import type { Berths } from '../types/berths';

export default {
  getBerths: async (): Promise<Berths> => {
    const data = await get('harbors');
    return List(data.results);
  }
};

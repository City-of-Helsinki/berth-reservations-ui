// @flow
import { List } from 'immutable';
import { get } from '../utils/api';
import type { Berths } from '../types/berths';

export default {
  getBerths: async (query: Object): Promise<Berths> => {
    const data = await get('berths', query);
    return List(data);
  }
};

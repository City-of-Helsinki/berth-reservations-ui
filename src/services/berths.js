// @flow
import { List } from 'immutable';
import { get } from '../utils/api';
import type { Berths } from '../types/berths';
import type { ApiResult } from '../types/api';
import type { BoatTypes } from '../types/boatTypes';

export default {
  getBerths: async (query: Object): Promise<Berths> => {
    const data = await get('berths', query);
    return List(data);
  },
  getBoatTypes: async (): Promise<ApiResult<BoatTypes>> => {
    const data = await get('boat-types');
    return data;
  }
};

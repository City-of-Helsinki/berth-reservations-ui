// @flow
import { List } from 'immutable';
import { get } from '../utils/api';
import userFactory from '../factories/user';
import type { Users } from '../types/user';

export default {
  getUsers: async (query: {}): Promise<Users> => {
    const data = await get('users', query);
    return List(data.map(userFactory));
  }
};

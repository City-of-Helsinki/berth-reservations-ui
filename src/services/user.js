// @flow
import { List, Record } from 'immutable';
import { get } from '../utils/api';
import type { UserFactory, Users } from '../types/user';

const userFactory: UserFactory = Record({
  id: '',
  name: '',
  email: ''
});

export default {
  getUsers: async (query: Object): Promise<Users> => {
    const data = await get('users', query);
    return List(data.map(userFactory));
  }
};

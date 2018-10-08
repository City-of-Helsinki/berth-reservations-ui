import { List } from 'immutable';
import { get } from '../utils/api';
import userFactory from '../factories/user';

export default {
  getUsers: async query => {
    const data = await get('users', query);
    return List(data.map(userFactory));
  }
};

import { List, Record } from 'immutable';
import { get } from '../utils/api';

const userFactory = Record({
  id: '',
  name: '',
  email: ''
});

export default {
  getUsers: async query => {
    const data = await get('users', query);
    debugger;
    return List(data.map(userFactory));
  }
};

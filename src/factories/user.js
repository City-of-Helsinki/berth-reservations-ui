// @flow
import { Record } from 'immutable';
import type { UserProps, Users } from '../types/user';

const factory = Record({
  id: '',
  name: '',
  email: ''
});

export default (data: UserProps): Users => factory(data);

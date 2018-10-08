import { Record } from 'immutable';

const factory = Record({
  id: '',
  name: '',
  email: ''
});

export default data => factory(data);

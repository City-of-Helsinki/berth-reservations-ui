import { Record } from 'immutable';
import { createAction } from 'redux-actions';

const defaultState = Record({
  first: undefined
});

export const sayHi = createAction('FIRST', () => 'hi');

export default (state = defaultState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FIRST':
      return state.set('first', payload);
    default:
      return state;
  }
};

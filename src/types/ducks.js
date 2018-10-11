// @flow
import type { RecordOf, List } from 'immutable';
import type { Users } from './user';

export type First = RecordOf<{
  first: ?string,
  users: List<Users>
}>;

export type Action = {
  type: string,
  payload: any
};

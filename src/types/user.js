// @flow
import type { RecordFactory, RecordOf, List } from 'immutable';

export type UserProps = {
  id: string,
  name: string,
  email: string
};
export type UserFactory = RecordFactory<UserProps>;

export type User = RecordOf<UserProps>;

export type Users = List<User>;

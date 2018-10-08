// @flow
import React from 'react';
import type { Users } from '../types/user';

type Props = {
  getUsers: Function,
  users: Users
};

const Foo = ({ getUsers, users }: Props) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <button onClick={() => getUsers()}>getUsera</button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </header>
  </div>
);

export default Foo;

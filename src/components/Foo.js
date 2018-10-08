import React from 'react';
import { Button } from 'reactstrap';

const Foo = ({ getUsers, users }) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <Button onClick={() => getUsers()}>getUsers</Button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </header>
  </div>
);

export default Foo;

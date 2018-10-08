import React from 'react';

const Foo = ({ getUsers, users }) => (
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

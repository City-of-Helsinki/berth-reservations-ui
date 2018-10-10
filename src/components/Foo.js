import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Foo = ({ getUsers, users }) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <Button onClick={() => getUsers()}>
        <FormattedMessage id="foo.get_users" />
      </Button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </header>
  </div>
);

export default Foo;

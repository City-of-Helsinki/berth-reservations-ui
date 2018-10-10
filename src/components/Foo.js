import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.color};
`;

const Foo = ({ getUsers, users }) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <StyledButton onClick={() => getUsers()}>
        <FormattedMessage id="foo.get_users" />
      </StyledButton>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </header>
  </div>
);

export default Foo;

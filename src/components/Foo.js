// @flow
import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import type { Users } from '../types/user';

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.color};
`;

type Props = {
  getUsers: Function,
  users: Users
};

const Foo = ({ getUsers, users }: Props) => (
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

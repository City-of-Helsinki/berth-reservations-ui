// @flow
import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import type { Users } from '../../types/user';
import InfoForm from '../forms/InfoForm';

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.color};
`;

type Props = {
  getUsers: Function,
  users: Users
};

const BoatPage = ({ getUsers, users }: Props) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <StyledButton onClick={() => getUsers()}>
        <FormattedMessage id="foo.get_users" />
      </StyledButton>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      <InfoForm onSubmit={console.log} validate={console.log} />
    </header>
  </div>
);

export default BoatPage;

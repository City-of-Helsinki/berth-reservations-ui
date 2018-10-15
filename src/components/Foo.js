// @flow
import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import RegisteredBoat from './forms/RegisteredBoat';
import LocalizedLink from './LocalizedLink';

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.color};
`;

type Props = {
  registeredBoat: Object,
  saveRegisteredBoat: Function
};

const Foo = ({ registeredBoat, saveRegisteredBoat }: Props) => (
  <div className="Foo">
    <header className="Foo-header">
      <p>FOO!!!!</p>
      <StyledButton onClick={() => console.log('moi')}>
        <FormattedMessage id="foo.get_users" />
      </StyledButton>
      <LocalizedLink to={'/'}>Front-page</LocalizedLink>

      <RegisteredBoat onSubmit={saveRegisteredBoat} initialValues={registeredBoat} />
    </header>
  </div>
);

export default Foo;

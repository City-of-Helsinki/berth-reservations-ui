import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import authService from '../../../../app/auth/authService';
import * as hooks from '../../../../app/auth/hooks';
import Navbar from '../Navbar';

describe('Navbar', () => {
  const history = createMemoryHistory();
  const renderComponent = () =>
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

  it('renders "log in" when user is not authenticated', () => {
    const isAuthenticated = jest.spyOn(authService, 'isAuthenticated').mockReturnValueOnce(false);
    const useCurrentUser = jest.spyOn(hooks, 'useCurrentUser').mockReturnValueOnce(null);
    renderComponent();

    expect(
      screen.getByRole('button', {
        name: /kirjaudu sisään/i,
      })
    ).toBeTruthy();
    expect(isAuthenticated).toHaveBeenCalled();
    expect(useCurrentUser).toHaveBeenCalled();
  });

  it('renders user name when user is authenticated', () => {
    const isAuthenticated = jest.spyOn(authService, 'isAuthenticated').mockReturnValueOnce(true);
    const useCurrentUser = jest
      .spyOn(hooks, 'useCurrentUser')
      .mockReturnValueOnce({ name: 'Testi Testinen', email: 'test@example.com' });
    renderComponent();

    expect(
      screen.getByRole('button', {
        name: /testi testinen/i,
      })
    ).toBeTruthy();
    expect(isAuthenticated).toHaveBeenCalled();
    expect(useCurrentUser).toHaveBeenCalled();
  });
});

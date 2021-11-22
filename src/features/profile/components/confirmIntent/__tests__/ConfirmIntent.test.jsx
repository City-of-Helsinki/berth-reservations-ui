import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ConfirmIntent from '../ConfirmIntent';

test('Should confirm that the user wants to complete the intent', async () => {
  const id = 'test-intent';
  const title = 'Are you sure?';
  const description = 'This action is irreversible.';
  const confirmIntentLabel = 'Confirm';
  const cancelIntentLabel = 'Cancel';
  const buttonLabel = 'Do irreversible action';
  const renderControl = (props) => <button {...props}>{buttonLabel}</button>;
  const intent = jest.fn();
  const props = {
    id,
    title,
    description,
    confirmIntentLabel,
    cancelIntentLabel,
    renderControl,
    intent,
  };

  render(<ConfirmIntent {...props} />);

  userEvent.click(screen.getByRole('button', { name: buttonLabel }));

  await waitFor(() => screen.findByText(title));
  expect(screen.getByText(description)).toBeTruthy();
  expect(screen.getByRole('button', { name: cancelIntentLabel })).toBeTruthy();

  userEvent.click(screen.getByRole('button', { name: confirmIntentLabel }));

  expect(intent).toHaveBeenCalled();
});

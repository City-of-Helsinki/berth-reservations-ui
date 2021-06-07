import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import useTransitionLogic, { UseTransitionLogicProps } from '../useTransitionLogic';

describe('useTransitionLogic', () => {
  const TestComponent = ({ handleRemove, moveDown, moveUp }: Omit<UseTransitionLogicProps, 'id'>) => {
    const { changed, hasChanged, toggleEnterState, doMoveUp, doMoveDown, doDelete } = useTransitionLogic({
      id: 'TEST',
      handleRemove,
      moveDown,
      moveUp,
    });

    return (
      <div>
        <input data-testid="changed" type="text" value={changed} readOnly />
        <input data-testid="hasChanged" type="checkbox" checked={hasChanged} readOnly />
        <button data-testid="toggleEnterState" onClick={() => toggleEnterState()} />
        <button data-testid="doMoveUp" onClick={() => doMoveUp()} />
        <button data-testid="doMoveDown" onClick={() => doMoveDown()} />
        <button data-testid="doDelete" onClick={() => doDelete()} />
      </div>
    );
  };

  test('should have expected default behavior', () => {
    const handleRemove = jest.fn();
    const moveDown = jest.fn();
    const moveUp = jest.fn();

    const { getByTestId } = render(<TestComponent handleRemove={handleRemove} moveDown={moveDown} moveUp={moveUp} />);

    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(false);
    expect((getByTestId('changed') as HTMLInputElement).value).toBe('nothing');
    expect(handleRemove).not.toHaveBeenCalled();
    expect(moveDown).not.toHaveBeenCalled();
    expect(moveUp).not.toHaveBeenCalled();
  });

  test('should call "moveDown" only after calling "doMoveDown" and "toggleEnterState"', () => {
    const moveDown = jest.fn();

    const { getByTestId } = render(<TestComponent handleRemove={jest.fn()} moveDown={moveDown} moveUp={jest.fn()} />);
    expect(moveDown).not.toHaveBeenCalled();

    userEvent.click(getByTestId('doMoveDown'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('changed') as HTMLInputElement).value).toBe('down');
    expect(moveDown).not.toHaveBeenCalled();

    userEvent.click(getByTestId('toggleEnterState'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(false);
    expect(moveDown).toHaveBeenCalledWith('TEST');
  });

  test('should call "moveUp" only after calling "doMoveUp" and "toggleEnterState"', () => {
    const moveUp = jest.fn();

    const { getByTestId } = render(<TestComponent handleRemove={jest.fn()} moveDown={jest.fn()} moveUp={moveUp} />);
    expect(moveUp).not.toHaveBeenCalled();

    userEvent.click(getByTestId('doMoveUp'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('changed') as HTMLInputElement).value).toBe('up');
    expect(moveUp).not.toHaveBeenCalled();

    userEvent.click(getByTestId('toggleEnterState'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(false);
    expect(moveUp).toHaveBeenCalledWith('TEST');
  });

  test('should call "handleRemove" only after calling "doDelete" and "toggleEnterState"', () => {
    const handleRemove = jest.fn();

    const { getByTestId } = render(
      <TestComponent handleRemove={handleRemove} moveDown={jest.fn()} moveUp={jest.fn()} />
    );
    expect(handleRemove).not.toHaveBeenCalled();

    userEvent.click(getByTestId('doDelete'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(true);
    expect((getByTestId('changed') as HTMLInputElement).value).toBe('delete');
    expect(handleRemove).not.toHaveBeenCalled();

    userEvent.click(getByTestId('toggleEnterState'));
    expect((getByTestId('hasChanged') as HTMLInputElement).checked).toBe(false);
    expect(handleRemove).toHaveBeenCalledWith('TEST');
  });
});

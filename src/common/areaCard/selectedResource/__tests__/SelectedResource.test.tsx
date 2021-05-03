import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { harbor } from '../../../../__fixtures__/harborFixture';
import SelectedResource, { SelectedResourceProps } from '../SelectedResource';

describe('SelectedResourceContainer', () => {
  const sharedProps: SelectedResourceProps = {
    title: 'foo',
    services: [
      ['plug', harbor.electricity],
      ['waterTap', harbor.water],
      ['trash', harbor.wasteCollection],
      ['fence', harbor.gate],
      ['streetLight', harbor.lighting],
    ],
    doMoveUp: jest.fn(),
    doMoveDown: jest.fn(),
    toggleModal: jest.fn(),
    validDomId: 'TEST',
    state: 'entering',
  };
  const renderComponent = (props?: Partial<SelectedResourceProps>) =>
    render(<SelectedResource {...sharedProps} {...props} />);

  test('should render an Icon for each service', () => {
    const { container } = renderComponent({
      services: [
        ['plug', true],
        ['waterTap', true],
        ['trash', false],
      ],
    });

    expect(container.querySelectorAll('.vene-selected-berth__service-icn')).toHaveLength(3);
  });

  test('should add a "disabled" modifier to the service icon when the supplied value is false', () => {
    const { container } = renderComponent({
      services: [
        ['plug', false],
        ['waterTap', true],
        ['trash', false],
      ],
    });

    expect(container.querySelectorAll('.vene-selected-berth__service-icn--disabled')).toHaveLength(2);
  });

  test('should call "toggleModal" when the close button is clicked', () => {
    const toggleModal = jest.fn();
    renderComponent({ toggleModal });

    userEvent.click(screen.getByRole('button', { name: 'Poista' }));
    expect(toggleModal).toBeCalled();
  });
});

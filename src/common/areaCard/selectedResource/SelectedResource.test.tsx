import { shallow } from 'enzyme';
import React from 'react';
import { Container } from 'reactstrap';

import { berth } from '../../../__fixtures__/berthFixture';
import Modal from '../../modal/Modal';
import SelectedResource, { Props } from './SelectedResource';

describe('SelectedResource', () => {
  const moveUp = jest.fn();
  const moveDown = jest.fn();
  const handleRemove = jest.fn();

  const getWrapper = (props?: Partial<Props>) =>
    shallow<{}, { changed: string; isModalOpen: boolean }>(
      <SelectedResource
        title="foo"
        id={berth.id}
        services={[
          ['plug', berth.electricity],
          ['waterTap', berth.water],
          ['trash', berth.wasteCollection],
          ['fence', berth.gate],
          ['streetLight', berth.lighting],
        ]}
        moveUp={moveUp}
        moveDown={moveDown}
        handleRemove={handleRemove}
        {...props}
      />
    );

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('should render a Container component', () => {
    const wrapper = getWrapper().dive();
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  test('should set the "changed" state to "up" when the button with up arrow is clicked', () => {
    const wrapper = getWrapper();

    wrapper.dive().find('.vene-selected-berth__arrow-btn').first().simulate('click');
    expect(wrapper.state().changed).toBe('up');
  });

  test('should set the "changed" state to "down" when the button with down arrow is clicked', () => {
    const wrapper = getWrapper();

    wrapper.dive().find('.vene-selected-berth__arrow-btn').last().simulate('click');

    expect(wrapper.state().changed).toBe('down');
  });

  test('should render an Icon for each service', () => {
    const wrapper = getWrapper({
      services: [
        ['plug', true],
        ['waterTap', true],
        ['trash', false],
      ],
    }).dive();
    const serviceIcons = wrapper.find('.vene-selected-berth__service-icn');

    expect(serviceIcons).toHaveLength(3);
  });

  test('should add a "disabled" modifier to the service icon when the supplied value is false', () => {
    const wrapper = getWrapper({
      services: [
        ['plug', false],
        ['waterTap', true],
        ['trash', false],
      ],
    }).dive();
    const disabledServiceIcons = wrapper.find('.vene-selected-berth__service-icn--disabled');

    expect(disabledServiceIcons).toHaveLength(2);
  });

  test('should set the "isModalOpen" state to "true" when the close button is clicked', () => {
    const wrapper = getWrapper({
      services: [
        ['plug', false],
        ['waterTap', true],
        ['trash', false],
      ],
    });
    const closeBtn = wrapper.dive().find('.vene-selected-berth__close-btn');

    closeBtn.simulate('click');
    expect(wrapper.state().isModalOpen).toBe(true);
  });

  test('should render Modal component', () => {
    const wrapper = getWrapper();
    const modal = wrapper.dive().find(Modal);

    expect(modal).toHaveLength(1);
  });

  test('invoking handleAccept prop of Modal should set "changed" state to "delete"', () => {
    const wrapper = getWrapper();
    const handleAccept = wrapper.dive().find(Modal).prop('handleAccept');

    (handleAccept as (e: React.SyntheticEvent<Element, Event>) => void)({} as React.SyntheticEvent);
    expect(wrapper.state().changed).toBe('delete');
  });
});

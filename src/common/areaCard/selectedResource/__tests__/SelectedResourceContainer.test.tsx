import React from 'react';
import { mount } from 'enzyme';

import { berth } from '../../../../__fixtures__/berthFixture';
import Modal from '../../../modal/Modal';
import SelectedResource from '../SelectedResource';
import SelectedResourceContainer, { Props } from '../SelectedResourceContainer';

describe('SelectedResourceContainer', () => {
  const sharedProps: Props = {
    title: 'foo',
    id: berth.id,
    services: [
      ['plug', berth.electricity],
      ['waterTap', berth.water],
      ['trash', berth.wasteCollection],
      ['fence', berth.gate],
      ['streetLight', berth.lighting],
    ],
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    handleRemove: jest.fn(),
  };
  const getWrapper = (props?: Partial<Props>) => mount(<SelectedResourceContainer {...sharedProps} {...props} />);

  test('should render a SelectedResource component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(SelectedResource)).toHaveLength(1);
  });

  test('should render a Modal component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});

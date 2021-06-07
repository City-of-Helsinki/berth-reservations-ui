import { mount } from 'enzyme';

import { harbor } from '../../../../__fixtures__/harborFixture';
import Modal from '../../../modal/Modal';
import SelectedResource from '../SelectedResource';
import SelectedResourceContainer, { Props } from '../SelectedResourceContainer';

describe('SelectedResourceContainer', () => {
  const sharedProps: Props = {
    title: 'foo',
    id: harbor.id,
    services: [
      ['plug', harbor.electricity],
      ['waterTap', harbor.water],
      ['trash', harbor.wasteCollection],
      ['fence', harbor.gate],
      ['streetLight', harbor.lighting],
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

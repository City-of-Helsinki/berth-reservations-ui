import { shallow } from 'enzyme';
import { Field } from 'react-final-form';

import SwitchApplication, { SwitchApplicationProps } from '../SwitchApplication';

const defaultSwitchApplicationProps: SwitchApplicationProps = {
  berthOptions: [],
  pierOptionsLoading: false,
  changeSelectedHarbor: jest.fn(),
  changeSelectedPier: jest.fn(),
  reasonOptions: [
    { label: '1', value: 'foo' },
    { label: '2', value: 'bar' },
  ],
  harborOptions: [
    {
      label: 'Harbor',
      value: 'MOCK-HARBOR',
    },
  ],
  pierOptions: [],
};

describe('SwitchApplication', () => {
  const getWrapper = () => shallow(<SwitchApplication {...defaultSwitchApplicationProps} />);
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('contain Field component for "harbor"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Field);

    expect(select.find('[name="harbor"]').prop('required')).toBe(true);
  });

  test('contain Field component for "pier"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Field);

    expect(select.find('[name="pier"]').prop('required')).toBe(true);
  });

  test('contain Field component for "berth"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Field);

    expect(select.find('[name="berth"]').prop('required')).toBe(true);
  });

  test('contain Select component for "reason"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Field);

    expect(select.find('[name="reason"]').prop('required')).toBeFalsy();
  });
});

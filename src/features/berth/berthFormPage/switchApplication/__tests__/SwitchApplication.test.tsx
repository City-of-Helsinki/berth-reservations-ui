import { shallow } from 'enzyme';
import { Field } from 'react-final-form';

import SwitchApplication, { SwitchApplicationProps } from '../SwitchApplication';

describe('SwitchApplication', () => {
  const getWrapper = (props?: Partial<SwitchApplicationProps>) =>
    shallow(
      <SwitchApplication
        currentBerths={[
          { value: '1234', label: 'Berth 1' },
          { value: '9876', label: 'Berth 2' },
        ]}
        reasonOptions={[
          { value: '1', label: 'foo' },
          { value: '2', label: 'bar' },
        ]}
        {...props}
      />
    );
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('contain Select component for "reason"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Field);

    expect(select.find('[name="berthSwitch.reason"]').prop('required')).toBeFalsy();
  });
});

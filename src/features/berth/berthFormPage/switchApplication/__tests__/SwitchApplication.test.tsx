import { shallow } from 'enzyme';
import { Field } from 'react-final-form';

import SwitchApplication, { SwitchApplicationProps } from '../SwitchApplication';

describe('SwitchApplication', () => {
  const getWrapper = (props?: Partial<SwitchApplicationProps>) =>
    shallow(
      <SwitchApplication
        reasonOptions={[
          { label: '1', value: 'foo' },
          { label: '2', value: 'bar' },
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

    expect(select.find('[name="reason"]').prop('required')).toBeFalsy();
  });
});

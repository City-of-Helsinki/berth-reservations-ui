import { shallow } from 'enzyme';
import React from 'react';
import { Field } from 'react-final-form';

import { mockHarbors } from '../../../../../__fixtures__/switchApplicationHarborsFixture';
import SwitchApplication, { SwitchApplicationProps } from '../SwitchApplication';

describe('SwitchApplication', () => {
  const getWrapper = (props?: Partial<SwitchApplicationProps>) =>
    shallow(
      <SwitchApplication
        change={() => undefined}
        reasonOptions={[
          { label: '1', value: 'foo' },
          { label: '2', value: 'bar' },
        ]}
        harborOptions={mockHarbors}
        values={{
          berth: null,
          harbor: null,
          pier: null,
          reason: null,
        }}
        {...props}
      />
    );
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

import { shallow } from 'enzyme';
import React from 'react';

import { berths } from '../../../../../__fixtures__/berthFixture';
import { Select, Text } from '../../../../../common/fields/Fields';
import SwitchApplication, { SwitchApplicationProps } from '../SwitchApplication';

describe('fragments/SwitchApplication', () => {
  const mockHarbor = berths;

  const getWrapper = (props?: Partial<SwitchApplicationProps>) =>
    shallow(
      <SwitchApplication
        reasons={[
          { __typename: 'BerthSwitchReasonType', id: '1', title: 'foo' },
          { __typename: 'BerthSwitchReasonType', id: '2', title: 'bar' },
        ]}
        harbors={mockHarbor}
        {...props}
      />
    );
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('contain Select components for "harborId"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Select);

    expect(select.find('[name="harborId"]').prop('required')).toBe(true);
  });

  test('contain Select components for "reason"', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Select);

    expect(select.find('[name="reason"]').last().prop('required')).toBeFalsy();
  });

  test('contain 2 text component', () => {
    const wrapper = getWrapper();
    const texts = wrapper.find(Text);

    expect(texts).toHaveLength(2);
    expect(texts.first().prop('required')).toBeFalsy();
    expect(texts.last().prop('required')).toBeTruthy();
  });

  describe('Select: reason', () => {
    test('reasons are provided: render reasons as options along with the default FormattedMessage/option', () => {
      const wrapper = getWrapper();
      const reasonSelect = wrapper.find('[name="reason"]');
      const reasonSelectChildren = reasonSelect.children();
      const options = reasonSelect.find('option');

      expect(reasonSelectChildren.length).toBeGreaterThan(1);
      expect(options.length).toBeGreaterThan(0);
    });

    test('reasons are NOT provided: render FormattedMessage as the only child', () => {
      const wrapper = getWrapper({ reasons: undefined });
      const reasonSelect = wrapper.find('[name="reason"]');
      const reasonSelectChildren = reasonSelect.children();

      expect(reasonSelectChildren).toHaveLength(1);
    });
  });
});
import { shallow } from 'enzyme';
import { List } from 'immutable';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HarborOptions } from '../../../../types/harborOptionsTypes';
import { Select, Text } from '../../Fields';

import ExchangeApplication, { ExchangeApplicationProps } from './ExchangeApplication';

describe('fragments/ExchangeApplication', () => {
  const mockHarbor: HarborOptions = List([{ id: 'foo', name: 'bar' }]);

  const getWrapper = (props?: Partial<ExchangeApplicationProps>) =>
    shallow(
      <ExchangeApplication
        reasons={[
          { __typename: 'BerthSwitchReasonType', id: '1', title: 'foo' },
          { __typename: 'BerthSwitchReasonType', id: '2', title: 'bar' }
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

    expect(
      select
        .find('[name="reason"]')
        .last()
        .prop('required')
    ).toBeFalsy();
  });

  test('contain 2 text component', () => {
    const wrapper = getWrapper();
    const texts = wrapper.find(Text);

    expect(texts).toHaveLength(2);
    expect(texts.first().prop('required')).toBeFalsy();
    expect(texts.last().prop('required')).toBeTruthy();
  });

  describe('Select: reason', () => {
    test('reasons are provided: render reasons as options component along with the default option', () => {
      const wrapper = getWrapper();
      const reasonSelect = wrapper.find('[name="reason"]');
      const reasonSelectChildren = reasonSelect.children();
      const options = reasonSelect.find('option');

      expect(reasonSelectChildren.length).toBeGreaterThan(1);
      expect(options.length).toBeGreaterThan(0);
    });

    test('reasons are NOT provided: render FormattedMessage as the only child that yields to option elem', () => {
      const wrapper = getWrapper({ reasons: undefined });
      const reasonSelect = wrapper.find('[name="reason"]');
      const reasonSelectChildren = reasonSelect.children();
      const formattedMessage = reasonSelect.find(FormattedMessage);

      expect(reasonSelectChildren).toHaveLength(1);
      expect(formattedMessage.prop('tagName')).toBe('option');
    });
  });
});

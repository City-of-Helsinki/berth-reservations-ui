import { shallow } from 'enzyme';
import { List } from 'immutable';
import React from 'react';
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

  test('Select has more than one option when reasons are provided as prop', () => {
    const wrapper = getWrapper();
    const reasonsSelect = wrapper.find('[name="reason"]').find('option');

    expect(reasonsSelect.length).toBeGreaterThan(1);
  });

  test('Select has one option with no value when reasons are not provided as prop', () => {
    const wrapper = getWrapper({ reasons: undefined });
    const reasonsSelect = wrapper.find('[name="reason"]');
    const options = reasonsSelect.find('option');

    expect(options).toHaveLength(1);
    expect(options.prop('value')).toBeUndefined();
  });

  test('contain 2 text component', () => {
    const wrapper = getWrapper();
    const texts = wrapper.find(Text);

    expect(texts).toHaveLength(2);
    expect(texts.first().prop('required')).toBeFalsy();
    expect(texts.last().prop('required')).toBeTruthy();
  });
});

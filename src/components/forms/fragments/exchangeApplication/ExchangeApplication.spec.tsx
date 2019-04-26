import { shallow } from 'enzyme';
import { List } from 'immutable';
import React from 'react';
import { HarborOptions } from '../../../../types/HarborOptionTypes';
import { Select, Text } from '../../Fields';

import ExchangeApplication from './ExchangeApplication';

describe('fragments/ExchangeApplication', () => {
  const mockHarbor: HarborOptions = List([{ id: 'foo', name: 'bar' }]);

  const getWrapper = () => shallow(<ExchangeApplication harbors={mockHarbor} />);
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('contain 1 select component', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Select);
    expect(select).toHaveLength(1);
    expect(select.prop('required')).toBeTruthy();
    expect(select.prop('name')).toEqual('harborId');
  });

  test('contain 2 text component', () => {
    const wrapper = getWrapper();
    const texts = wrapper.find(Text);
    expect(texts).toHaveLength(2);
    expect(texts.first().prop('required')).toBeFalsy();
    expect(texts.last().prop('required')).toBeTruthy();
  });
});

import { shallow } from 'enzyme';
import { List } from 'immutable';
import React from 'react';
import { HarborOptions } from '../../../../types/harborOptionsTypes';
import { Select, Text } from '../../Fields';

import ExchangeApplication from './ExchangeApplication';

describe('fragments/ExchangeApplication', () => {
  const mockHarbor: HarborOptions = List([{ id: 'foo', name: 'bar' }]);

  const getWrapper = () => shallow(<ExchangeApplication harbors={mockHarbor} />);
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('contain select components', () => {
    const wrapper = getWrapper();
    const select = wrapper.find(Select);
    expect(select).toHaveLength(2);
    expect(select.first().prop('required')).toBe(true);
    expect(select.last().prop('required')).toBeFalsy();
  });

  test('contain 2 text component', () => {
    const wrapper = getWrapper();
    const texts = wrapper.find(Text);
    expect(texts).toHaveLength(2);
    expect(texts.first().prop('required')).toBeFalsy();
    expect(texts.last().prop('required')).toBeTruthy();
  });
});

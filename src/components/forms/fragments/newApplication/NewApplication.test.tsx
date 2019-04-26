import React from 'react';

import { shallow } from 'enzyme';

import NewApplication from './NewApplication';

describe('fragments/NewApplication', () => {
  test('render normally', () => {
    const wrapper = shallow(<NewApplication />);

    expect(wrapper).toBeDefined();
  });
});

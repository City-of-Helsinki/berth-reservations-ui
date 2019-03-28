import { shallow } from 'enzyme';
import React from 'react';
import BerthDetails from './index';

describe('components/berths/BerthDetails', () => {
  const defaultProps = {
    available: false,
    icon: 'foo',
    value: 'bar',
    titleId: 'test'
  };
  const getWrapper = props => shallow(<BerthDetails {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

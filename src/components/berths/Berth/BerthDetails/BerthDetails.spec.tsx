import { IconNames } from '@common/Icon';
import { shallow } from 'enzyme';
import React from 'react';
import BerthDetails from './index';
import BerthDetailsProps from './types';

describe('components/berths/BerthDetails', () => {
  const defaultProps: BerthDetailsProps = {
    available: false,
    value: 123,
    titleId: 'test',
    iconName: 'check'
  };
  const getWrapper = (props?: BerthDetailsProps) =>
    shallow(<BerthDetails {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

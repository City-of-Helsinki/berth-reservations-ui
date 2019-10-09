import React from 'react';
import { shallowWithIntl } from '../../../../utils/testUtils';
import BerthDetails, { Props } from './index';

describe('components/berths/BerthDetails', () => {
  const defaultProps: Props = {
    available: false,
    value: 123,
    unit: 'm',
    titleId: 'test',
    iconName: 'check'
  };
  const getWrapper = (props?: Props) =>
    shallowWithIntl(<BerthDetails {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

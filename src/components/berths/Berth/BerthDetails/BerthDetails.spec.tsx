import React from 'react';
import { shallowWithIntl } from '../../../../utils/testUtils';
import BerthDetails from './index';
import BerthDetailsProps from './types';

describe('components/berths/BerthDetails', () => {
  const defaultProps: BerthDetailsProps = {
    available: false,
    value: 123,
    unit: 'm',
    titleId: 'test',
    iconName: 'check'
  };
  const getWrapper = (props?: BerthDetailsProps) =>
    shallowWithIntl(<BerthDetails {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

import React from 'react';
import { shallowWithIntl } from '../../../../utils/testUtils';
import Property, { Props } from './Property';

describe('components/berths/Property', () => {
  const defaultProps: Props = {
    available: false,
    value: 123,
    unit: 'm',
    titleId: 'test',
    iconName: 'check'
  };
  const getWrapper = (props?: Props) => shallowWithIntl(<Property {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

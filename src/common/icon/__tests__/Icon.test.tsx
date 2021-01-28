import { shallow } from 'enzyme';
import React from 'react';

import Icon, { IconProps } from '../Icon';

describe('common/Icon', () => {
  const defaultProps: IconProps = {
    name: 'helsinkiLogo',
  };
  const getWrapper = (props?: IconProps) => {
    return shallow(<Icon {...defaultProps} {...props} />);
  };

  test('render Icon component', () => {
    const icon = getWrapper();

    expect(icon).toHaveLength(1);
    expect(icon).toBeDefined();
  });

  test('Icon props contain default className', () => {
    const icon = getWrapper({ className: 'foo', name: defaultProps.name });

    expect(icon.prop('className')).toContain('vene-icon');
    expect(icon.prop('className')).toContain('foo');
  });
});

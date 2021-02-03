import { shallow } from 'enzyme';
import React from 'react';
import { Row } from 'reactstrap';

import LocalizedLink from '../../localizedLink/LocalizedLink';
import LinkedEditSection, { Props } from '../LinkedEditSection';

describe('LinkedEditSection', () => {
  const child = <div>body</div>;
  const getWrapper = (props?: Partial<Props>) =>
    shallow(
      <LinkedEditSection title="foo" link="foo/bar" {...props}>
        {child}
      </LinkedEditSection>
    );

  test('should be wrapped by Row component', () => {
    expect(getWrapper().first().is(Row)).toBe(true);
  });

  test('should render the children', () => {
    expect(getWrapper().contains(child)).toBe(true);
  });

  test('should pass "link" prop as a "to" to LocalizedLink component', () => {
    const link = 'foo/bar/foo';
    expect(getWrapper({ link }).find(LocalizedLink).prop('to')).toBe(link);
  });
});

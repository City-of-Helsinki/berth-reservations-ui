import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';

import OverviewInfo, { Props } from './OverviewInfo';

describe('OverviewInfo', () => {
  const child = <div>bar</div>;
  const getWrapper = (props?: Partial<Props>) =>
    shallow(
      <OverviewInfo title="foo" {...props}>
        {child}
      </OverviewInfo>
    );

  test('should be wrapped by a Container component', () => {
    const wrapper = getWrapper();

    expect(wrapper.first().is(Container)).toBe(true);
  });

  test('should pass the title as an id for FormattedMessage component', () => {
    const title = 'foo-bar';
    const wrapper = getWrapper({ title });

    expect(wrapper.find(FormattedMessage).prop('id')).toBe(title);
  });

  test('should render passed children', () => {
    const wrapper = getWrapper();

    expect(wrapper.contains(child)).toBe(true);
  });
});

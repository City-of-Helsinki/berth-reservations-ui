import { shallow } from 'enzyme';
import { Container } from 'reactstrap';

import OverviewInfo, { Props } from '../OverviewInfo';

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

  test('should render passed children', () => {
    const wrapper = getWrapper();

    expect(wrapper.contains(child)).toBe(true);
  });
});

import { shallow } from 'enzyme';
import { LoadingSpinner } from 'hds-react';

import Spinner, { SpinnerProps } from '../Spinner';

describe('components/common/spinner', () => {
  const getWrapper = (props: SpinnerProps) => shallow(<Spinner {...props} />);

  it('renders only spinner div with default props', () => {
    const wrapper = getWrapper({});
    expect(wrapper.find(LoadingSpinner).length).toBe(1);
  });
});

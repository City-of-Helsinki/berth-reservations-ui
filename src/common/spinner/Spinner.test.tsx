import React from 'react';
import { shallow } from 'enzyme';

import Spinner, { SpinnerProps } from './Spinner';

describe('components/common/spinner', () => {
  const getWrapper = (props: SpinnerProps) => shallow(<Spinner {...props} />);

  it('renders only spinner div with default props', () => {
    const wrapper = getWrapper({});
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('.vene-spinner__spinner').length).toBe(1);
  });

  it('renders text when withText is true', () => {
    const wrapper = getWrapper({ withText: true });
    expect(wrapper.find('.vene-spinner').length).toBe(1);
    expect(wrapper.find('.vene-spinner__text').length).toBe(1);
  });

  it('renders custom text when withText is true and custom text is specified', () => {
    const text = 'custom loading text';
    const wrapper = getWrapper({ text, withText: true });
    expect(wrapper.find('.vene-spinner__text').text()).toContain(text);
  });
});

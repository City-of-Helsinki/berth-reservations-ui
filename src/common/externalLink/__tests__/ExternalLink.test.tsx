import React from 'react';
import { shallow } from 'enzyme';

import ExternalLink, { ExternalLinkProps } from '../ExternalLink';

describe('ExternalLink', () => {
  const getWrapper = (props: ExternalLinkProps) => shallow(<ExternalLink {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper({ children: 'test' });
    expect(wrapper.render()).toMatchSnapshot();
  });
});

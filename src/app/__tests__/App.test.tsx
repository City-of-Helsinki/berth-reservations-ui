import { shallow } from 'enzyme';
import React from 'react';

import { getMockRouterProps } from '../../__fixtures__/routerFixture';
import { LocaleOpts } from '../../common/types/intl';
import App from '../App';

describe('App', () => {
  const getWrapper = () => {
    const props = getMockRouterProps({ locale: LocaleOpts.EN });
    return shallow(<App {...props} />);
  };

  test('render normally', () => {
    const wrapper = getWrapper();
    expect(wrapper).toBeDefined();
  });
});

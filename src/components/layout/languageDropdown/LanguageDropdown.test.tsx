import React from 'react';
import { Dropdown } from 'reactstrap';

import { shallowWithIntl } from '../../../utils/testUtils';
import LanguageDropdown from './LanguageDropdown';

describe('test', () => {
  const getWrapper = () => shallowWithIntl(<LanguageDropdown />);

  test('should render Dropdown component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });
});

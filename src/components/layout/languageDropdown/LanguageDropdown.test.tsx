import React from 'react';
import { Dropdown } from 'reactstrap';

import { mountWithIntl } from '../../../utils/testUtils';
import LanguageDropdown from './LanguageDropdown';

describe('LanguageDropdown', () => {
  const getWrapper = () => mountWithIntl(<LanguageDropdown />);

  test('should render Dropdown component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });

  test('should set the HTML lang attribute as the value of locale', () => {
    const locale = 'fr-ch';
    const wrapper = getWrapper();
    const intl = wrapper.prop('intl');

    wrapper.setContext({ intl: { ...intl, locale } });

    expect(document.documentElement.lang).toBe(locale);
  });
});

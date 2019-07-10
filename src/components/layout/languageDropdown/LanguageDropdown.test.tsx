import React from 'react';
import { Dropdown } from 'reactstrap';

import { mountWithIntl } from '../../../utils/testUtils';
import LanguageDropdown from './LanguageDropdown';

import { LocaleOpts } from '../../../types/intl';

describe('LanguageDropdown', () => {
  const getWrapper = (locale?: LocaleOpts) =>
    mountWithIntl(<LanguageDropdown />, undefined, locale);

  test('should render Dropdown component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });

  test('should set the HTML lang attribute as the value of locale', () => {
    const localeFi = LocaleOpts.FI;
    const localeSv = LocaleOpts.SV;

    getWrapper(localeFi);
    expect(document.documentElement.lang).toBe(localeFi);
    getWrapper(localeSv);
    expect(document.documentElement.lang).toBe(localeSv);
  });
});

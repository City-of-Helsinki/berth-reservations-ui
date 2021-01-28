import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Dropdown } from 'reactstrap';

import i18n from '../../../../locales/i18n';
import { LocaleOpts } from '../../../../types/intl';
import LanguageDropdown from '../LanguageDropdown';

describe('LanguageDropdown', () => {
  const getWrapper = (locale: LocaleOpts = LocaleOpts.EN) => {
    act(() => {
      i18n.changeLanguage(locale);
    });
    return mount(<LanguageDropdown />);
  };

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

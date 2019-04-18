import React from 'react';

import { shallowWithIntl } from '../../../../utils/testUtils';
import { Text } from '../../Fields';

import ApplicationCode from './ApplicationCode';

describe('src/components/forms/fragments/ApplicationCode', () => {
  const wrapper = () => shallowWithIntl(<ApplicationCode />);

  test('should be wrapped by a div with a className of vene-application-code', () => {
    expect(wrapper().find('div.vene-application-code')).toHaveLength(1);
  });

  test('should render a Text field with a name of applicationCode', () => {
    const textField = wrapper().find(Text);
    expect(textField.prop('name')).toBe('applicationCode');
  });
});

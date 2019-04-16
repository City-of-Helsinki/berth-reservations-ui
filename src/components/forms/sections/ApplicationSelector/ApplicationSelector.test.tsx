import React from 'react';
import { shallowWithIntl } from '../../../../utils/testUtils';
import Input from '../../../common/Input';
import ApplicationSelector from './ApplicationSelector';

describe('forms/sections/ApplicationSelector', () => {
  const getWrapper = () => shallowWithIntl(<ApplicationSelector />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('contain 2 input element', () => {
    const wrapper = getWrapper();
    const inputs = wrapper.find(Input);

    expect(inputs).toHaveLength(2);
  });
});

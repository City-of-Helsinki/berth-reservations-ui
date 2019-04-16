import React from 'react';
import { Label } from 'reactstrap';
import { mountWithIntl } from '../../../../utils/testUtils';
import Alert from '../../../common/Alert';
import Input from '../../../common/Input';
import { UnconnectedApplicationSelector as ApplicationSelector } from './ApplicationSelector';

describe('forms/sections/ApplicationSelector', () => {
  const defaultProps = {
    selected: 0
  };
  const getWrapper = (props?: object) =>
    mountWithIntl(<ApplicationSelector {...defaultProps} {...props} />);

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

  test('each input contain label and text, each input is a radio', () => {
    const wrapper = getWrapper();
    const input = wrapper.find(Input).first();

    expect(input.find(Label)).toHaveLength(1);
    expect(input.prop('type')).toEqual('radio');
    expect(input.find('p')).toHaveLength(1);
  });

  test('show alert when selected > 5', () => {
    const wrapper = getWrapper({ selected: 6 });
    const alert = wrapper.find(Alert);

    expect(alert).toBeDefined();
  });

  test('disable 2nd radio when selected > 5', () => {
    const wrapper = getWrapper({ selected: 6 });
    const input = wrapper.find(Input).last();

    expect(input.prop('disabled')).toBeTruthy();
  });

  test('show both radio btn when selected > 5', () => {
    const wrapper = getWrapper({ selected: 3 });
    const inputs = wrapper.find(Input);
    const lastInput = inputs.last();

    expect(inputs).toHaveLength(2);
    expect(lastInput.prop('disabled')).toBeFalsy();
  });
});

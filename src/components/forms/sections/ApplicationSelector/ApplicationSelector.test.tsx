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

  describe('switch application', () => {
    test('new application input is selected by default', () => {
      const wrapper = getWrapper({ selected: 6 });
      const input = wrapper.find(Input).first();

      expect(input.prop('checked')).toBeTruthy();
    });

    test('show alert when exchange application is selected and berth selected > 5', () => {
      const wrapper = getWrapper({ selected: 6 });
      const exchangeInput = wrapper.find(Input).last();
      const alert = wrapper.find(Alert);

      exchangeInput.find('input[type="radio"]').simulate('change', { target: { checked: true } });
      wrapper.update();
      expect(alert).toBeDefined();
    });
  });
});

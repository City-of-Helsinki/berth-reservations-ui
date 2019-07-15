import React from 'react';

import { ApplicationOptions } from '../../../../types/applicationType';
import { mountWithIntl } from '../../../../utils/testUtils';
import Alert from '../../../common/Alert';
import Input from '../../../common/Input';
import { UnconnectedApplicationSelector as ApplicationSelector } from './ApplicationSelector';

describe('forms/sections/ApplicationSelector', () => {
  const defaultProps = {
    selectedBerthCount: 0,
    berthsApplicationType: ApplicationOptions.NewApplication,
    switchApplication: jest.fn(),
    setBerthLimit: jest.fn(),
    resetBerthLimit: jest.fn(),
    berthLimit: 10
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

  test('each input is a radio', () => {
    const wrapper = getWrapper();
    const input = wrapper.find(Input).first();

    expect(input.prop('type')).toEqual('radio');
  });

  test('each input has a label that contains a title of type strong and description of as a paragraph', () => {
    const wrapper = getWrapper();
    const input = wrapper.find(Input).first();

    expect(input.find('strong')).toHaveLength(1);
    expect(input.find('p')).toHaveLength(1);
  });

  describe('berth limit', () => {
    test('default to 10', () => {
      const wrapper = getWrapper();

      expect(wrapper.prop('berthLimit')).toEqual(10);
    });

    test('set new berth limit when switch to exchange application without alert', () => {
      const mock = jest.fn();
      const wrapper = getWrapper({ selectedBerthCount: 4, setBerthLimit: mock });
      // avoid triggering alert

      const instance = wrapper.children().instance() as any;
      instance.onToggleSwitch({
        currentTarget: {
          value: 'exchange_application'
        }
      });

      wrapper.update();

      expect(mock).toBeCalled();
    });

    test('reset berth limit when switch to exchange application without alert', () => {
      const mock = jest.fn();
      const wrapper = getWrapper({ selectedBerthCount: 4, resetBerthLimit: mock });
      // avoid triggering alert

      const instance = wrapper.children().instance() as any;
      instance.onToggleSwitch({
        currentTarget: {
          value: 'new_application'
        }
      });

      wrapper.update();

      expect(mock).toBeCalled();
    });
  });
  describe('switch application', () => {
    test('new application input is selected by default', () => {
      const wrapper = getWrapper({ selectedBerthCount: 6 });
      const input = wrapper.find(Input).first();

      expect(input.prop('checked')).toBeTruthy();
    });

    test('show alert when exchange application is selected and berth selected > 5', () => {
      const wrapper = getWrapper({ selectedBerthCount: 6 });

      const instance = wrapper.children().instance() as any;
      instance.onToggleSwitch({
        currentTarget: {
          value: 'exchange_application'
        }
      });

      wrapper.update();

      expect(wrapper.children().state('alertVisibility')).toBeTruthy();
      expect(wrapper.find('.vene-alert').exists()).toEqual(true);
    });

    describe('alert box', () => {
      test('will always not being rendered when new application is selected', () => {
        const wrapper = getWrapper();

        wrapper.setState({ alertVisibility: true });
        wrapper.update();

        const instance = wrapper.children().instance() as any;
        instance.onToggleSwitch({
          currentTarget: {
            value: 'new_application'
          }
        });

        expect(wrapper.find('.vene-alert').exists()).toEqual(false);
      });

      test('show alert when selected > 5', () => {
        const wrapper = getWrapper({ selectedBerthCount: 6 });
        const alert = wrapper.find(Alert);

        expect(alert).toBeDefined();
      });

      test('able to close independenly by clicking close button', () => {
        const wrapper = getWrapper();
        wrapper.children().setState({ alertVisibility: true });
        wrapper.update();

        wrapper.find('.close').simulate('click');
        expect(wrapper.find('.vene-alert').exists()).toEqual(false);
      });
    });
  });
});

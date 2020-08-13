import { mount } from 'enzyme';
import React from 'react';
import { Alert as BTAlert, AlertProps as BTAlertProps } from 'reactstrap';
import Alert from './Alert';

describe('components/common/Input', () => {
  const defaultProps: BTAlertProps & {
    messageId: string;
  } = {
    color: 'danger',
    messageId: 'test.message',
    className: 'vene-alert',
  };

  const getWrapper = (props?: object) => mount(<Alert {...defaultProps} {...props} />);

  test('render Input element normally', () => {
    const alert = getWrapper().find(BTAlert);

    expect(alert).toHaveLength(1);
    expect(alert.prop('color')).toEqual(defaultProps.color);
  });

  test('contain passed className, and default className', () => {
    const wrapper = getWrapper({ className: 'foo' });
    const alert = wrapper.find(BTAlert);

    expect(alert.length).toEqual(1);
    expect(alert.prop('className')).toContain('foo');
    expect(alert.prop('className')).toContain(defaultProps.className);
  });

  test('messageId get translated as children', () => {
    const alert = getWrapper().find(BTAlert);

    expect(alert).toHaveLength(1);
    expect(alert.prop('children')).toEqual('Testiteksti');
  });
});

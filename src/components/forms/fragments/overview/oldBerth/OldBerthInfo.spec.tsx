import React from 'react';

import { shallow } from 'enzyme';
import { Record } from 'immutable';
import { FormattedMessage } from 'react-intl';
import { ApplicationFactory, ApplicationProps } from '../../../../../redux/types';
import { ApplicationOptions } from '../../../../../types/applicationType';
import OldBerthInfo from './OldBerthInfo';
describe('fragments/ExchangeApplication', () => {
  const defaultData: ApplicationProps = {
    berthsApplicationType: ApplicationOptions.NewApplication,
    berthSwitch: {
      harborId: '',
      berthNumber: ''
    }
  };
  const defaultApplication: ApplicationFactory = Record(defaultData);

  const getWrapper = (props?: object) =>
    shallow(<OldBerthInfo application={defaultApplication()} {...props} />);
  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });

  test('render new application header when new application is selected', () => {
    const wrapper = getWrapper();
    expect(wrapper.find(FormattedMessage).prop('id')).toEqual(
      'page.berth.exchange_application.new'
    );
  });

  test('render current berth info if exchange application is selected', () => {
    const wrapper = getWrapper({
      berthsApplicationType: ApplicationOptions.ExchangeApplication,
      berthSwitch: {
        harborId: 'foo',
        berthNumber: '123'
      }
    });
    expect(wrapper.find('.vene-overview-info__old-berth-info__name')).toBeDefined();
  });
});

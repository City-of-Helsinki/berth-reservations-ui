import React from 'react';

import { shallow } from 'enzyme';
import { Record } from 'immutable';
import { FormattedMessage } from 'react-intl';
import { APPLICATION_OPTIONS } from '../../../../../constants/ApplicationConstants';
import { ApplicationFactory } from '../../../../../redux/types';
import OldBerthInfo from './OldBerthInfo';
describe('fragments/ExchangeApplication', () => {
  const defaultApplication: ApplicationFactory = Record({
    selectedApplicationType: APPLICATION_OPTIONS.NEW_APPLICATION,
    berthSwitch: {
      harborId: '',
      berthNumber: ''
    }
  });

  const defaultData = defaultApplication();

  const getWrapper = (props?: object) =>
    shallow(<OldBerthInfo application={defaultData} {...props} />);
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
      selectedApplicationType: APPLICATION_OPTIONS.EXCHANGE_APPLICATION,
      berthSwitch: {
        harborId: 'foo',
        berthNumber: '123'
      }
    });
    expect(wrapper.find('.vene-overview-info__old-berth-info__name')).toBeDefined();
  });
});

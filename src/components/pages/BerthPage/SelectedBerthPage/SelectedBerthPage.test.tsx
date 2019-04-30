import React from 'react';

import { shallow } from 'enzyme';
import { berths } from '../../../../__fixtures__/BerthFixture';
import { services } from '../../../../__fixtures__/ServiceFixture';
import { APPLICATION_OPTIONS } from '../../../../constants/ApplicationConstants';
import SelectedBerthPage, { Props } from './SelectedBerthPage';

describe('pages/BerthPage/SelectedBerthPage', () => {
  const defaultProps: Props = {
    selectedServices: services,
    selectedBerths: berths,
    initialValues: {},
    deselectBerth: jest.fn(),
    localePush: jest.fn(),
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    selectedApplicationType: APPLICATION_OPTIONS.NEW_APPLICATION,
    submitExchangeForm: jest.fn(),
    values: {}
  };
  const getWrapper = (props?: object) =>
    shallow(<SelectedBerthPage {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

import { shallow } from 'enzyme';
import React from 'react';

import SelectedBerthPage, { Props } from './SelectedBerthPage';

import { berths } from '../../../../__fixtures__/berthFixture';
import { boatTypes } from '../../../../__fixtures__/boatTypeFixture';
import { harbors } from '../../../../__fixtures__/harborFixture';
import { services } from '../../../../__fixtures__/serviceFixture';
import { ApplicationOptions } from '../../../../types/applicationType';

describe('pages/BerthPage/SelectedBerthPage', () => {
  const defaultProps: Props = {
    selectedServices: services,
    selectedBerths: berths,
    initialValues: {},
    deselectBerth: jest.fn(),
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    selectedApplicationType: ApplicationOptions.NewApplication,
    submitExchangeForm: jest.fn(),
    values: {},
    moveToForm: jest.fn(),
    handlePrevious: jest.fn(),
    boatTypes: [],
    data: {
      boatTypes,
      harbors
    },
    legend: { title: 'foo', legend: 'bar' },
    steps: []
  };

  const getWrapper = (props?: object) =>
    shallow(<SelectedBerthPage {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

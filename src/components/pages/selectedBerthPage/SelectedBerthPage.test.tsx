import { shallow } from 'enzyme';
import React from 'react';

import SelectedBerthPage, { Props } from './SelectedBerthPage';

import { berths } from '../../../__fixtures__/berthFixture';
import { ApplicationOptions } from '../../../types/applicationType';

describe('pages/BerthPage/SelectedBerthPage', () => {
  const defaultProps: Props = {
    boatInfo: { width: '4', length: '10' },
    selectedBerths: berths,
    initialValues: {},
    deselectBerth: jest.fn(),
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    berthsApplicationType: ApplicationOptions.NewApplication,
    submitExchangeForm: jest.fn(),
    values: {},
    moveToForm: jest.fn(),
    handlePrevious: jest.fn(),
    legend: { title: 'foo', legend: 'bar' },
    steps: [],
    validSelection: true,
    filter: jest.fn()
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const getWrapper = (props?: object) =>
    shallow(<SelectedBerthPage {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

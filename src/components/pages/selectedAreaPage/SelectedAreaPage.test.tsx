import { shallow } from 'enzyme';
import React from 'react';

import SelectedAreaPage, { Props } from './SelectedAreaPage';

import { winterValues } from '../../../__fixtures__/formValuesFixture';
import { winterAreas } from '../../../__fixtures__/winterStorageFixture';

describe('pages/BerthPage/SelectedAreaPage', () => {
  const defaultProps: Props = {
    boatInfo: { width: '4', length: '10' },
    selectedAreas: winterAreas,
    deselectArea: jest.fn(),
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    submitExchangeForm: jest.fn(),
    values: winterValues,
    moveToForm: jest.fn(),
    handlePrevious: jest.fn(),
    legend: { title: 'foo', legend: 'bar' },
    steps: [],
    validSelection: true,
    filter: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const getWrapper = (props?: object) => shallow(<SelectedAreaPage {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

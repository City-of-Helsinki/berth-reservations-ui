import { shallow } from 'enzyme';
import React from 'react';

import LabelValuePair from './LabelValuePair';

describe('LabelValuePair', () => {
  const getWrapper = (props: { label: string; value?: string } = { label: 'foo', value: 'bar' }) =>
    shallow(<LabelValuePair {...props} />);

  test('should render a wrapper with a className of "vene-label-value-pair"', () => {
    expect(getWrapper().find('div.vene-label-value-pair')).toHaveLength(1);
  });
});

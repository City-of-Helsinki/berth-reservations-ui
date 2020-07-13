import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LabelValuePair from './LabelValuePair';

describe('LabelValuePair', () => {
  const getWrapper = (props: { label: string; value?: string } = { label: 'foo', value: 'bar' }) =>
    shallow(<LabelValuePair {...props} />);

  test('should render a wrapper with a className of "vene-label-value-pair"', () => {
    expect(getWrapper().find('div.vene-label-value-pair')).toHaveLength(1);
  });

  test('should pass the label to FormattedMessage', () => {
    const label = 'Custom label';

    expect(getWrapper({ label }).find(FormattedMessage).prop('id')).toBe(label);
  });
});

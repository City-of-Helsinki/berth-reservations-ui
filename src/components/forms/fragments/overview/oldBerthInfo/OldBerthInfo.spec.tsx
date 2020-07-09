import { shallow } from 'enzyme';
import { Record } from 'immutable';
import React from 'react';
import { Row } from 'reactstrap';

import OldBerthInfo from './OldBerthInfo';

import { ApplicationFactory, ApplicationProps } from '../../../../../redux/types';
import { ApplicationOptions } from '../../../../../types/applicationType';

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
  test('render Row component as a wrapper', () => {
    const wrapper = getWrapper();

    expect(wrapper.at(0).is(Row)).toBe(true);
  });
});

import React from 'react';
import { Modal as RsModal } from 'reactstrap';

import { shallowWithIntl } from '../../../utils/testUtils';

import Modal from './Modal';

describe('Modal', () => {
  const handleToggle = jest.fn();
  const handleAccept = jest.fn();
  const getWrapper = () =>
    shallowWithIntl(<Modal isOpen handleToggle={handleToggle} handleAccept={handleAccept} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should render Modal component from reactstrap', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(RsModal)).toBeDefined();
  });
});

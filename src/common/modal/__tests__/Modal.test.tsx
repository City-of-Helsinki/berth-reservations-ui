import { shallow } from 'enzyme';
import { Modal as RsModal } from 'reactstrap';

import Modal from '../Modal';

describe('Modal', () => {
  const handleToggle = jest.fn();
  const handleAccept = jest.fn();
  const getWrapper = () => shallow(<Modal id="modal" isOpen handleToggle={handleToggle} handleSubmit={handleAccept} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should render Modal component from reactstrap', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(RsModal)).toBeDefined();
  });
});

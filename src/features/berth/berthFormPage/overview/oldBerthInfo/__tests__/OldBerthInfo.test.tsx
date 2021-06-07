import { shallow } from 'enzyme';
import { Row } from 'reactstrap';

import OldBerthInfo, { OldBerthInfoProps } from '../OldBerthInfo';

describe('fragments/OldBerthInfo', () => {
  const sharedProps: OldBerthInfoProps = {
    harborName: 'Harbor',
    pier: 'Pier',
    berthNumber: 'Number',
    reasonTitle: 'Reason',
  };

  const getWrapper = (props?: object) => shallow(<OldBerthInfo {...sharedProps} {...props} />);
  test('render Row component as a wrapper', () => {
    const wrapper = getWrapper();

    expect(wrapper.at(0).is(Row)).toBe(true);
  });
});

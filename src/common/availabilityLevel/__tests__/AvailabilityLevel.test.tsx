import { shallow } from 'enzyme';

import AvailabilityLevel, { Props } from '../AvailabilityLevel';

describe('AvailabilityLevel', () => {
  const getWrapper = ({ label, level }: Props = { label: 'Available Now', level: '1' }) =>
    shallow(<AvailabilityLevel label={label} level={level} />);

  test('should render a span tag with "vene-availability-level" className', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('span.vene-availability-level')).toHaveLength(1);
  });

  test('should add a correspondent className to the supplied level if the latter belongs to the range 1-5', () => {
    const wrapper1 = getWrapper({ level: '1' });
    const wrapper2 = getWrapper({ level: '2' });
    const wrapper3 = getWrapper({ level: '3' });
    const wrapper4 = getWrapper({ level: '4' });
    const wrapper5 = getWrapper({ level: '5' });

    expect(wrapper1.find('span').hasClass(`vene-availability-level--green`)).toBe(true);
    expect(wrapper2.find('span').hasClass(`vene-availability-level--yellow`)).toBe(true);
    expect(wrapper3.find('span').hasClass(`vene-availability-level--red`)).toBe(true);
    expect(wrapper4.find('span').hasClass(`vene-availability-level--red`)).toBe(true);
    expect(wrapper5.find('span').hasClass(`vene-availability-level--green`)).toBe(true);
  });

  test("should NOT add a modifier className if supplied level doesn't belong to the range 1-5", () => {
    const wrapper = getWrapper({ level: '6' });
    const className = wrapper.find('span').first().prop('className');

    expect(className).toEqual(expect.not.stringMatching('vene-availability-level--'));
  });
});

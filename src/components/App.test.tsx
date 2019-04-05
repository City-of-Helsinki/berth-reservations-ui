import { shallow } from 'enzyme';
import App, { Props } from './App';

import { shallowWithIntl } from '../utils/testUtils';

describe('App', () => {
  const defaultProps: Props = {
    locale: 'fi'
  };
  const AppComponent = App(defaultProps);

  const getWrapper = () => shallowWithIntl(AppComponent);

  test('render normally', () => {
    const wrapper = getWrapper();
    expect(wrapper).toBeDefined();
  });
});

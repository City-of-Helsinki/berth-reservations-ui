import { shallow } from 'enzyme';

import SelectedBerthPage, { Props } from '../SelectedBerthPage';
import { harbors } from '../../../../__fixtures__/harborFixture';
import { ApplicationOptions } from '../../../../common/types/applicationType';

describe('pages/BerthPage/SelectedBerthPage', () => {
  const defaultProps: Props = {
    boatInfo: { boatType: 'Soutuvene', width: '4', length: '10' },
    selectedHarbors: harbors,
    deselectBerth: jest.fn(),
    moveUp: jest.fn(),
    moveDown: jest.fn(),
    applicationType: ApplicationOptions.NewApplication,
    handleSubmit: jest.fn(),
    handlePrevious: jest.fn(),
    validSelection: true,
    filter: jest.fn(),
    submitDisabled: false,
    switchApplicationProps: {
      berthOptions: [],
      harborOptions: [],
      pierOptions: [],
      pierOptionsLoading: false,
      reasonOptions: [],
      changeSelectedHarbor: jest.fn(),
      changeSelectedPier: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const getWrapper = (props?: object) => shallow(<SelectedBerthPage {...defaultProps} {...props} />);

  test('render normally', () => {
    const wrapper = getWrapper();

    expect(wrapper).toBeDefined();
  });
});

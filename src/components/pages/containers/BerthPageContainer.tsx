import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, getBoatTypes } from '../../../ducks/forms';
import {
  getBerths,
  selectBerth,
  deselectBerth,
  selectService,
  deselectService
} from '../../../ducks/berths';
import BerthPage from '../BerthPage';

import { Berths as BerthsType, SelectedBerths } from '../../../types/berths';
import { SelectedServices } from '../../../types/services';
import { BoatTypes } from '../../../types/boatTypes';
import { Store } from '../../../types/ducks';

type Props = {
  getBerths: () => Promise<BerthsType>;
  getBoatTypes: () => Promise<BoatTypes>;
  boatTypes: BoatTypes;
  initialValues: {};
  berths: BerthsType;
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: SelectedBerths;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: Function;
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      boatTypes: state.forms.boatTypes,
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices
    }),
    {
      onSubmit,
      getBoatTypes,
      getBerths,
      selectBerth,
      deselectBerth,
      selectService,
      deselectService
    }
  )
)(BerthPage);

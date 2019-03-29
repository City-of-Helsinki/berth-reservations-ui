import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { deselectBerth, moveUp, moveDown } from '../../../ducks/berths';
import SelectedBerthPage from '../SelectedBerthPage';

import { Store } from '../../../types/ducks';
import { Berths as BerthsType, SelectedBerths as SelectedBerthsType } from '../../../types/berths';
import { SelectedServices } from '../../../types/services';
import { BoatTypes } from '../../../types/boatTypes';

type Props = {
  boatTypes: BoatTypes;
  berths: BerthsType;
  selectedBerths: SelectedBerthsType;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
  locale: string;
  values: {};
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      values: state.forms.values,
      boatTypes: state.forms.boatTypes
    }),
    {
      deselectBerth,
      moveUp,
      moveDown
    }
  )
)(SelectedBerthPage);

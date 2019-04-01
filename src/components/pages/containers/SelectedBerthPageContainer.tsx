import { connect } from 'react-redux';
import { compose } from 'recompose';
import { deselectBerth, moveDown, moveUp } from '../../../ducks/berths';
import { withMatchParamsHandlers } from '../../../utils/container';
import SelectedBerthPage from '../SelectedBerthPage';

import { BoatTypes } from '../../../types/boatTypes';
import { Store } from '../../../types/ducks';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType, SelectedBerths as SelectedBerthsType } from '../../berths/types';

interface Props {
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
}

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

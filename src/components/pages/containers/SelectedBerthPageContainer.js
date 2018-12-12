// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { deselectBerth, moveUp, moveDown } from '../../../ducks/berths';
import SelectedBerthPage from '../SelectedBerthPage';

import type { Store } from '../../../types/ducks';

export default compose(
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

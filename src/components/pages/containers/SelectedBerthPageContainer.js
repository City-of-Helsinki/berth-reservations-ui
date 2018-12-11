// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { get } from 'lodash';
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
      selectedBoatType: get(state, 'forms.values.boat.type')
    }),
    {
      deselectBerth,
      moveUp,
      moveDown
    }
  )
)(SelectedBerthPage);

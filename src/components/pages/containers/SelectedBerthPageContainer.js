// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { deselectBerth, moveUp, moveDown } from '../../../ducks/berths';
import SelectedBerthPage from '../SelectedBerthPage';

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices
    }),
    {
      deselectBerth,
      moveUp,
      moveDown
    }
  )
)(SelectedBerthPage);

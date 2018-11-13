// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, getBoatTypes } from '../../../ducks/forms';
import { getBerths, selectBerth, deselectBerth, moveUp, moveDown } from '../../../ducks/berths';
import BerthPage from '../BerthPage';

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      boatTypes: state.forms.boatTypes,
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit, getBoatTypes, getBerths, selectBerth, deselectBerth, moveUp, moveDown }
  )
)(BerthPage);

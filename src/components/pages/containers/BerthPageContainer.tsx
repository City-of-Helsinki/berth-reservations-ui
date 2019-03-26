// @flow
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

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
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

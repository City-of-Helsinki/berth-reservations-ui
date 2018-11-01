// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLocaleHandlers } from '../../../utils/container';
import { onSubmit, nextStep } from '../../../ducks/forms';
import { getBerths, selectBerth, deselectBerth } from '../../../ducks/berths';
import BerthPage from '../BerthPage';

export default compose(
  withLocaleHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      step: state.forms.step,
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit, nextStep, getBerths, selectBerth, deselectBerth }
  )
)(BerthPage);

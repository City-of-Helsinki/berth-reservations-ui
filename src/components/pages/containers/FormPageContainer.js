// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, getBoatTypes, resetValues } from '../../../ducks/forms';
import FormPage from '../FormPage';

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      boatTypes: state.forms.boatTypes,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit, getBoatTypes, resetValues }
  )
)(FormPage);

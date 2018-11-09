// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, resetValues } from '../../../ducks/forms';
import FormPage from '../FormPage';

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit, resetValues }
  )
)(FormPage);

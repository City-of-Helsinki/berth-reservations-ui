// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, nextStep, prevStep, resetValues } from '../../../ducks/forms';
import FormPage from '../FormPage';

export default compose(
  withMatchParamsHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      step: state.forms.step,
      done: state.forms.done
    }),
    { onSubmit, nextStep, prevStep, resetValues }
  )
)(FormPage);

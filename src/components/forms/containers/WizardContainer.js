// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLocaleHandlers } from '../../../utils/container';
import { onSubmit, nextStep, prevStep } from '../../../ducks/forms';
import Wizard from '../Wizard';

export default compose(
  withLocaleHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      step: state.forms.step
    }),
    { onSubmit, nextStep, prevStep }
  )
)(Wizard);

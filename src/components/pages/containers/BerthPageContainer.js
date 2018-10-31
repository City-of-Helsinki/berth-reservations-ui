// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLocaleHandlers } from '../../../utils/container';
import { onSubmit, nextStep } from '../../../ducks/forms';
import { getBerths } from '../../../ducks/berths';
import BerthPage from '../BerthPage';

export default compose(
  withLocaleHandlers,
  connect(
    state => ({
      initialValues: state.forms.values,
      step: state.forms.step,
      berths: state.berths.berths
    }),
    { onSubmit, nextStep, getBerths }
  )
)(BerthPage);

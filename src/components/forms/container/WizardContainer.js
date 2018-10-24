// @flow
import { connect } from 'react-redux';
import { onSubmit } from '../../../ducks/forms';
import Wizard from '../Wizard';

export default connect(
  state => ({
    initialValues: state.forms.values
  }),
  { onSubmit }
)(Wizard);

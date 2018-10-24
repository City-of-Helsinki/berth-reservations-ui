// @flow
import { connect } from 'react-redux';
import Steps from '../Steps';

export default connect(
  state => ({
    step: state.forms.step,
    done: state.forms.done
  }),
  {}
)(Steps);

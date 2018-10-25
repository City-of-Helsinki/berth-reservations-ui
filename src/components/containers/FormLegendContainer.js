// @flow
import { connect } from 'react-redux';
import FormLegend from '../FormLegend';

export default connect(
  state => ({
    step: state.forms.step
  }),
  {}
)(FormLegend);

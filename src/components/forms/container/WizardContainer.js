// @flow
import { connect } from 'react-redux';
import { saveRegisteredBoat } from '../../../ducks/forms';
import Wizard from '../Wizard';

export default connect(
  state => ({
    registeredBoat: state.forms.registeredBoat
  }),
  { onSubmit: saveRegisteredBoat }
)(Wizard);

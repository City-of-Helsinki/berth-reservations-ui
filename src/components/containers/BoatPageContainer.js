// @flow
import { connect } from 'react-redux';
import { saveRegisteredBoat } from '../../ducks/forms';
import BoatPage from '../pages/BoatPage';

export default connect(
  state => ({
    registeredBoat: state.forms.registeredBoat
  }),
  { saveRegisteredBoat }
)(BoatPage);

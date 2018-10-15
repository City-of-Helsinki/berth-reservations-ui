// @flow
import { connect } from 'react-redux';
import Foo from '../Foo';
import { saveRegisteredBoat } from '../../ducks/forms';

export default connect(
  state => ({
    registeredBoat: state.forms.registeredBoat
  }),
  { saveRegisteredBoat }
)(Foo);

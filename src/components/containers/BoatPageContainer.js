// @flow
import { connect } from 'react-redux';
import BoatPage from '../pages/BoatPage';
import { getUsers } from '../../ducks/first';

export default connect(
  state => ({
    users: state.first.users
  }),
  { getUsers }
)(BoatPage);

import { connect } from 'react-redux';
import Foo from '../Foo';
import { getUsers } from '../../ducks/first';

export default connect(
  state => ({
    users: state.first.users
  }),
  { getUsers }
)(Foo);

import { connect } from 'react-redux';
import { sayHi } from '../ducks/first';
import App from '../App';

export default connect(
  state => ({
    first: state.first.first
  }),
  { sayHi }
)(App);

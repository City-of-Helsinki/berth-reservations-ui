import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { resetValues } from '../../../ducks/forms';
import ThankYouPage from '../ThankYouPage';

export default compose(
  connect(
    () => ({}),
    { resetValues }
  ),
  lifecycle({
    componentDidMount() {
      const { resetValues: resetForm } = this.props;
      resetForm();
    }
  })
)(ThankYouPage);

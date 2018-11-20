import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { resetValues } from '../../../ducks/forms';
import { resetBerths } from '../../../ducks/berths';
import ThankYouPage from '../ThankYouPage';

export default compose(
  connect(
    () => ({}),
    { resetValues, resetBerths }
  ),
  lifecycle({
    componentDidMount() {
      const { resetValues: resetForm, resetBerths: resetBerthsState } = this.props;
      resetForm();
      resetBerthsState();
    }
  })
)(ThankYouPage);

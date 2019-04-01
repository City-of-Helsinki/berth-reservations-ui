import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { resetBerths } from '../../../ducks/berths';
import { resetValues } from '../../../ducks/forms';
import ThankYouPage from '../ThankYouPage';

interface Props {
  resetValues: Function;
  resetBerths: Function;
}

export default compose<Props, {}>(
  connect(
    () => ({}),
    { resetValues, resetBerths }
  ),
  lifecycle<Props, {}>({
    componentDidMount() {
      const { resetValues: resetForm, resetBerths: resetBerthsState } = this.props;
      resetForm();
      resetBerthsState();
    }
  })
)(ThankYouPage);

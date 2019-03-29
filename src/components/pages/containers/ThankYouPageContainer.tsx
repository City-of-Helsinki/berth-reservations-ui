import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { resetValues } from '../../../ducks/forms';
import { resetBerths } from '../../../ducks/berths';
import ThankYouPage from '../ThankYouPage';

type Props = {
  resetValues: Function;
  resetBerths: Function;
};

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

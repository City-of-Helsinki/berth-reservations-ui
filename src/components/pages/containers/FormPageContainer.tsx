import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { Store } from '../../../redux/types';
import { SelectedBerths } from '../../berths/types';

interface Props {
  initialValues: {};
  selectedBerths: SelectedBerths;
  onSubmit: Function;
  localePush: Function;
  tab: string;
}

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit }
  )
)(FormPage);

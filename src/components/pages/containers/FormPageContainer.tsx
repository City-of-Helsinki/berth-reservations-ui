import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { ApplicationState, Store } from '../../../redux/types';
import { Berths } from '../../berths/types';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: Function;
  tab: string;
  application: ApplicationState;
}

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths,
      application: state.application
    }),
    { onSubmit }
  )
)(FormPage);

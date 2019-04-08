import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../ducks/forms';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { Store } from '../../../types/ducks';
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

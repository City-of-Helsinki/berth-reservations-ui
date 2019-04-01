import { withMatchParamsHandlers } from '@utils/container';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getBoatTypes, onSend, onSubmit } from '../../../ducks/forms';
import FormPage from '../FormPage';

import { Berths, SelectedBerths } from '@berths/types';
import { BoatTypes } from '../../../types/boatTypes';
import { Store } from '../../../types/ducks';

interface Props {
  initialValues: {};
  boatTypes: BoatTypes;
  berths: Berths;
  selectedBerths: SelectedBerths;
  onSubmit: Function;
  onSend: Function;
  localePush: Function;
  getBoatTypes: Function;
  tab: string;
}

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      boatTypes: state.forms.boatTypes,
      berths: state.berths.berths,
      selectedBerths: state.berths.selectedBerths
    }),
    { onSubmit, onSend, getBoatTypes }
  )
)(FormPage);

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withMatchParamsHandlers } from '../../../utils/container';
import { onSubmit, onSend, getBoatTypes } from '../../../ducks/forms';
import FormPage from '../FormPage';

import { Store } from '../../../types/ducks';
import { BoatTypes } from '../../../types/boatTypes';
import { Berths, SelectedBerths } from '../../../types/berths';

type Props = {
  initialValues: {};
  boatTypes: BoatTypes;
  berths: Berths;
  selectedBerths: SelectedBerths;
  onSubmit: Function;
  onSend: Function;
  localePush: Function;
  getBoatTypes: Function;
  tab: string;
};

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

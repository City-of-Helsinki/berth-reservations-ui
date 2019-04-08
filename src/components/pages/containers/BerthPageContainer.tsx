import { connect } from 'react-redux';
import { compose } from 'recompose';
import { deselectBerth, deselectService, selectBerth, selectService } from '../../../ducks/berths';
import { onSubmit } from '../../../ducks/forms';
import { withMatchParamsHandlers } from '../../../utils/container';
import BerthPage from '../BerthPage';

import { Store } from '../../../types/ducks';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType, SelectedBerths } from '../../berths/types';

interface Props {
  initialValues: {};
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: SelectedBerths;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: Function;
}

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices
    }),
    {
      onSubmit,
      selectBerth,
      deselectBerth,
      selectService,
      deselectService
    }
  )
)(BerthPage);

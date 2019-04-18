import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  deselectBerth,
  deselectService,
  selectBerth,
  selectService
} from '../../../redux/actions/BerthActions';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import BerthPage from '../BerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

interface Props {
  initialValues: {};
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: BerthsType;
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

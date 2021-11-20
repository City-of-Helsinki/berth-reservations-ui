import * as React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { resetBerths } from '../../redux/actions/BerthActions';
import { resetValues } from '../../redux/actions/FormActions';
import { resetWinterAreas } from '../../redux/actions/WinterAreaActions';

interface Props {
  resetValues: () => void;
  resetBerths: () => void;
  resetWinterAreas: () => void;
}

const resetStore = (component: React.ComponentType<Props>) =>
  compose<Props, {}>(
    connect(() => ({}), { resetValues, resetBerths, resetWinterAreas }),
    lifecycle<Props, {}>({
      componentDidMount() {
        const {
          resetValues: resetForm,
          resetBerths: resetBerthsState,
          resetWinterAreas: resetWinterStorageState,
        } = this.props;
        resetForm();
        resetBerthsState();
        resetWinterStorageState();
      },
    })
  )(component);

export default resetStore;

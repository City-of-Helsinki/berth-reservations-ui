import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { resetBerthSwitch } from '../../redux/actions/BerthSwitchActions';
import { resetBerths } from '../../redux/actions/BerthActions';
import { resetValues } from '../../redux/actions/FormActions';
import { resetWinterAreas } from '../../redux/actions/WinterAreaActions';

interface Props {
  resetValues: () => void;
  resetBerths: () => void;
  resetWinterAreas: () => void;
  resetBerthSwitch: () => void;
}

const resetStore = (component: React.ComponentType<Props>) =>
  compose<Props, {}>(
    connect(() => ({}), { resetValues, resetBerths, resetWinterAreas, resetBerthSwitch }),
    lifecycle<Props, {}>({
      componentDidMount() {
        const {
          resetValues: resetForm,
          resetBerths: resetBerthsState,
          resetWinterAreas: resetWinterStorageState,
          resetBerthSwitch: resetBerthSwitchState,
        } = this.props;
        resetForm();
        resetBerthsState();
        resetWinterStorageState();
        resetBerthSwitchState();
      },
    })
  )(component);

export default resetStore;

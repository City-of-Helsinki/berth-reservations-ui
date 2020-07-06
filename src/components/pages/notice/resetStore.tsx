import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { resetApplication } from '../../../redux/actions/ApplicationActions';
import { resetBerths } from '../../../redux/actions/BerthActions';
import { resetValues } from '../../../redux/actions/FormActions';
import { resetWinterAreas } from '../../../redux/actions/WinterAreaActions';

interface Props {
  resetValues: Function;
  resetBerths: Function;
  resetWinterAreas: Function;
  resetApplication: Function;
}

export default (component: React.ComponentType<any>) =>
  compose<Props, {}>(
    connect(
      () => ({}),
      { resetValues, resetBerths, resetWinterAreas, resetApplication }
    ),
    lifecycle<Props, {}>({
      componentDidMount() {
        const {
          resetValues: resetForm,
          resetBerths: resetBerthsState,
          resetWinterAreas: resetWinterStorageState,
          resetApplication: resetApplicationState
        } = this.props;
        resetForm();
        resetBerthsState();
        resetWinterStorageState();
        resetApplicationState();
      }
    })
  )(component);

import React from 'react';
import { connect } from 'react-redux';

import { EXCHANGE_APPLICATION_LIMIT } from '../../../../common/utils/constants';
import { switchApplication as switchApplicationAction } from '../../../../redux/actions/ApplicationActions';
import {
  resetBerthLimit as resetBerthLimitAction,
  setBerthLimit as setBirthLimitAction,
} from '../../../../redux/actions/BerthActions';
import { Store } from '../../../../redux/types';
import { ApplicationOptions } from '../../../../common/types/applicationType';
import './applicationSelector.scss';
import ApplicationSelector from './ApplicationSelector';
import useAutoDismissAlert from './useAutoDismissAlert';

export type ApplicationSelectorContainerProps = {
  berthsApplicationType: string;
  className?: string;
  resetBerthLimit: Function;
  selectedBerthCount: number;
  setBerthLimit: Function;
  switchApplication: Function;
};

export const _ApplicationSelectorContainer = ({
  berthsApplicationType,
  className,
  resetBerthLimit,
  selectedBerthCount,
  setBerthLimit,
  switchApplication,
}: ApplicationSelectorContainerProps) => {
  const [alertVisible, setAlertVisible] = useAutoDismissAlert();

  const onToggleSwitch = (e: React.FormEvent<HTMLInputElement>) => {
    // new application selected
    if (e.currentTarget.value === ApplicationOptions.NewApplication) {
      setAlertVisible(false);
      switchApplication(e.currentTarget.value);
      resetBerthLimit();
    } else if (selectedBerthCount > EXCHANGE_APPLICATION_LIMIT) {
      setAlertVisible(true);
    } else {
      switchApplication(e.currentTarget.value);
      setBerthLimit(EXCHANGE_APPLICATION_LIMIT);
    }
  };

  return (
    <ApplicationSelector
      alertVisible={alertVisible}
      className={className}
      berthsApplicationType={berthsApplicationType}
      onSwitch={onToggleSwitch}
      closeAlert={() => setAlertVisible(!alertVisible)}
    />
  );
};

const mapStateToProps = (state: Store) => ({
  selectedBerthCount: state.berths.selectedBerths.size,
  berthsApplicationType: state.application.berthsApplicationType,
  berthLimit: state.berths.berthLimit,
});

export default connect(mapStateToProps, {
  switchApplication: switchApplicationAction,
  setBerthLimit: setBirthLimitAction,
  resetBerthLimit: resetBerthLimitAction,
})(_ApplicationSelectorContainer);

import * as React from 'react';
import { connect } from 'react-redux';

import { SWITCH_APPLICATION_LIMIT } from '../../../../../common/utils/constants';
import {
  setApplicationType as setApplicationTypeAction,
  resetBerthLimit as resetBerthLimitAction,
  setBerthLimit as setBirthLimitAction,
} from '../../../../../redux/actions/BerthActions';
import { Store } from '../../../../../redux/types';
import { ApplicationOptions } from '../../../../../common/types/applicationType';
import './applicationSelector.scss';
import ApplicationSelector from './ApplicationSelector';
import useAutoDismissAlert from './useAutoDismissAlert';

export type ApplicationSelectorContainerProps = {
  berthsApplicationType: string;
  className?: string;
  resetBerthLimit: () => void;
  selectedBerthCount: number;
  setBerthLimit: (limit: number) => void;
  setApplicationType: (event: ApplicationOptions) => void;
};

export const ApplicationSelectorContainer = ({
  berthsApplicationType,
  className,
  resetBerthLimit,
  selectedBerthCount,
  setBerthLimit,
  setApplicationType,
}: ApplicationSelectorContainerProps) => {
  const [alertVisible, setAlertVisible] = useAutoDismissAlert();

  const onToggleSwitch = (e: React.FormEvent<HTMLInputElement>) => {
    // new application selected
    if (e.currentTarget.value === ApplicationOptions.NewApplication) {
      setAlertVisible(false);
      setApplicationType(e.currentTarget.value);
      resetBerthLimit();
    } else if (selectedBerthCount > SWITCH_APPLICATION_LIMIT) {
      setAlertVisible(true);
    } else {
      setApplicationType(e.currentTarget.value as ApplicationOptions.SwitchApplication);
      setBerthLimit(SWITCH_APPLICATION_LIMIT);
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
  selectedBerthCount: state.berths.selectedHarbors.size,
  berthsApplicationType: state.berths.applicationType,
  berthLimit: state.berths.berthLimit,
});

export default connect(mapStateToProps, {
  setApplicationType: setApplicationTypeAction,
  setBerthLimit: setBirthLimitAction,
  resetBerthLimit: resetBerthLimitAction,
})(ApplicationSelectorContainer);

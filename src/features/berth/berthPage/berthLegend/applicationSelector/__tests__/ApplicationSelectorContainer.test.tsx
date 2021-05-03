import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { SWITCH_APPLICATION_LIMIT } from '../../../../../../common/utils/constants';
import { ApplicationOptions } from '../../../../../../common/types/applicationType';
import { ApplicationSelectorContainer, ApplicationSelectorContainerProps } from '../ApplicationSelectorContainer';
import * as useAutoDismissAlert from '../useAutoDismissAlert';

describe('forms/sections/ApplicationSelectorContainer', () => {
  const sharedProps: ApplicationSelectorContainerProps = {
    berthsApplicationType: ApplicationOptions.NewApplication,
    resetBerthLimit: jest.fn(),
    selectedBerthCount: 0,
    setBerthLimit: jest.fn(),
    setApplicationType: jest.fn(),
  };
  const renderComponent = (props?: Partial<ApplicationSelectorContainerProps>) =>
    render(<ApplicationSelectorContainer {...sharedProps} {...props} />);

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('if switched to new application, should hide alert and reset berth limit', () => {
    const resetBerthLimit = jest.fn();
    const setApplicationType = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.SwitchApplication,
      resetBerthLimit: resetBerthLimit,
      setApplicationType: setApplicationType,
    });

    fireEvent.click(getByLabelText(/Uusi hakemus/));
    expect(resetBerthLimit).toHaveBeenCalled();
    expect(setApplicationType).toHaveBeenCalledWith(ApplicationOptions.NewApplication);
    expect(setAlertVisible).toHaveBeenCalledWith(false);
  });

  test('if switched to switch application and over berth limit, should prevent switch and show alert', () => {
    const setApplicationType = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
      selectedBerthCount: SWITCH_APPLICATION_LIMIT + 1,
      setApplicationType: setApplicationType,
    });

    fireEvent.click(getByLabelText(/Vaihtohakemus/));
    expect(setApplicationType).not.toHaveBeenCalled();
    expect(setAlertVisible).toHaveBeenCalledWith(true);
  });

  test('if switched to switch application, should set berth limit', () => {
    const setBerthLimit = jest.fn();
    const setApplicationType = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
      setBerthLimit: setBerthLimit,
      setApplicationType: setApplicationType,
    });

    fireEvent.click(getByLabelText(/Vaihtohakemus/));
    expect(setBerthLimit).toHaveBeenCalledWith(SWITCH_APPLICATION_LIMIT);
    expect(setApplicationType).toHaveBeenCalledWith(ApplicationOptions.SwitchApplication);
  });
});

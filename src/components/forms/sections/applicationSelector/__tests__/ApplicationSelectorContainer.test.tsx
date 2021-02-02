import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { EXCHANGE_APPLICATION_LIMIT } from '../../../../../common/utils/constants';
import { ApplicationOptions } from '../../../../../common/types/applicationType';
import {
  _ApplicationSelectorContainer as ApplicationSelectorContainer,
  ApplicationSelectorContainerProps,
} from '../ApplicationSelectorContainer';
import * as useAutoDismissAlert from '../useAutoDismissAlert';

describe('forms/sections/ApplicationSelectorContainer', () => {
  const sharedProps = {
    berthsApplicationType: ApplicationOptions.NewApplication,
    resetBerthLimit: jest.fn(),
    selectedBerthCount: 0,
    setBerthLimit: jest.fn(),
    switchApplication: jest.fn(),
  };
  const renderComponent = (props?: Partial<ApplicationSelectorContainerProps>) =>
    render(<ApplicationSelectorContainer {...sharedProps} {...props} />);

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('if switched to new application, should hide alert and reset berth limit', () => {
    const resetBerthLimit = jest.fn();
    const switchApplication = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.ExchangeApplication,
      resetBerthLimit: resetBerthLimit,
      switchApplication: switchApplication,
    });

    fireEvent.click(getByLabelText(/Uusi hakemus/));
    expect(resetBerthLimit).toHaveBeenCalled();
    expect(switchApplication).toHaveBeenCalledWith(ApplicationOptions.NewApplication);
    expect(setAlertVisible).toHaveBeenCalledWith(false);
  });

  test('if switched to exchange application and over berth limit, should prevent switch and show alert', () => {
    const switchApplication = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
      selectedBerthCount: EXCHANGE_APPLICATION_LIMIT + 1,
      switchApplication: switchApplication,
    });

    fireEvent.click(getByLabelText(/Vaihtohakemus/));
    expect(switchApplication).not.toHaveBeenCalled();
    expect(setAlertVisible).toHaveBeenCalledWith(true);
  });

  test('if switched to exchange application, should set berth limit', () => {
    const setBerthLimit = jest.fn();
    const switchApplication = jest.fn();
    const setAlertVisible = jest.fn();

    jest.spyOn(useAutoDismissAlert, 'default').mockImplementation(() => [false, setAlertVisible]);
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
      setBerthLimit: setBerthLimit,
      switchApplication: switchApplication,
    });

    fireEvent.click(getByLabelText(/Vaihtohakemus/));
    expect(setBerthLimit).toHaveBeenCalledWith(EXCHANGE_APPLICATION_LIMIT);
    expect(switchApplication).toHaveBeenCalledWith(ApplicationOptions.ExchangeApplication);
  });
});

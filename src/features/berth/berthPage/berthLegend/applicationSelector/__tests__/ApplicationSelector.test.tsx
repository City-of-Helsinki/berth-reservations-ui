import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ApplicationOptions } from '../../../../../../common/types/applicationType';
import ApplicationSelector, { ApplicationSelectorProps } from '../ApplicationSelector';

describe('forms/sections/ApplicationSelector', () => {
  const sharedProps: ApplicationSelectorProps = {
    alertVisible: false,
    className: 'TEST',
    berthsApplicationType: ApplicationOptions.NewApplication,
    onSwitch: jest.fn(),
    closeAlert: jest.fn(),
  };
  const renderComponent = (props?: Partial<ApplicationSelectorProps>) =>
    render(<ApplicationSelector {...sharedProps} {...props} />);

  test('contains 2 radio input elements', () => {
    const { container } = renderComponent();
    const inputs = container.querySelectorAll('input[type="radio"]');

    expect(inputs).toHaveLength(2);
  });

  test('contains two titles (strong) and two info texts (paragraph)', () => {
    const { container } = renderComponent();
    const titles = container.querySelectorAll('strong');
    const infoTexts = container.querySelectorAll('p');

    expect(titles).toHaveLength(2);
    expect(infoTexts).toHaveLength(2);
  });

  test('if berthsApplicationType is NewApplication, show "new application" as checked', () => {
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
    });

    expect((getByLabelText(/Uusi hakemus/) as HTMLInputElement).checked).toBe(true);
    expect((getByLabelText(/Vaihtohakemus/) as HTMLInputElement).checked).toBe(false);
  });

  test('if berthsApplicationType is SwitchApplication, show "switch application" as checked', () => {
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.SwitchApplication,
    });

    expect((getByLabelText(/Uusi hakemus/) as HTMLInputElement).checked).toBe(false);
    expect((getByLabelText(/Vaihtohakemus/) as HTMLInputElement).checked).toBe(true);
  });

  test('clicking "new application" calls onSwitch expectedly', () => {
    let eventValue = null;
    const onSwitch = jest.fn((event) => (eventValue = event.target.value));
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.SwitchApplication,
      onSwitch: onSwitch,
    });

    fireEvent.click(getByLabelText(/Uusi hakemus/));
    expect(eventValue).toEqual(ApplicationOptions.NewApplication);
  });

  test('clicking "switch application" calls onSwitch expectedly', () => {
    let eventValue = null;
    const onSwitch = jest.fn((event) => (eventValue = event.target.value));
    const { getByLabelText } = renderComponent({
      berthsApplicationType: ApplicationOptions.NewApplication,
      onSwitch: onSwitch,
    });

    fireEvent.click(getByLabelText(/Vaihtohakemus/));
    expect(eventValue).toEqual(ApplicationOptions.SwitchApplication);
  });

  test('if alertVisible is true, Alert should be shown', () => {
    const { getByText } = renderComponent({
      alertVisible: true,
    });

    expect(getByText(/Vaihtohakemukseen voit valita enintään/)).toBeDefined();
  });

  test('if alertVisible is false, Alert should not be shown', () => {
    const { queryByText } = renderComponent({
      alertVisible: false,
    });

    expect(queryByText(/Vaihtohakemukseen voit valita enintään/)).not.toBeTruthy();
  });

  test('clicking the alert toggle should call closeAlert', () => {
    const closeAlert = jest.fn();
    const { getByLabelText } = renderComponent({
      alertVisible: true,
      closeAlert: closeAlert,
    });

    fireEvent.click(getByLabelText(/Close/));
    expect(closeAlert).toHaveBeenCalled();
  });
});

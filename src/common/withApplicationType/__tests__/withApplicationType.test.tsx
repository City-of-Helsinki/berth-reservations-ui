import { shallow } from 'enzyme';
import React from 'react';

import { ApplicationOptions, ApplicationType } from '../../../types/applicationType';
import { getApplicationType } from '../withApplicationType';

describe('withApplicationType', () => {
  const Component = (props: { applicationType: string }) => <h1>{props.applicationType}</h1>;

  test('should pass "applicationType" to the component in question', () => {
    const WrappedComponent = getApplicationType(Component);
    const wrapper = shallow(
      <WrappedComponent
        appType={ApplicationOptions.NewApplication}
        match={{ params: { app: ApplicationType.BerthApp }, isExact: true, url: '', path: '' }}
      />
    );

    expect(wrapper.find(Component).props()).toHaveProperty('applicationType');
  });

  describe('Berth application', () => {
    test('New application: the value of "applicationType" should be "site.steps.title.berths.new"', () => {
      const WrappedComponent = getApplicationType(Component);
      const wrapper = shallow(
        <WrappedComponent
          appType={ApplicationOptions.NewApplication}
          match={{
            params: { app: ApplicationType.BerthApp },
            isExact: true,
            url: '',
            path: '',
          }}
        />
      );

      expect(wrapper.find(Component).prop('applicationType')).toBe('site.steps.title.berths.new');
    });

    test('Exchange application: the value of "applicationType" should be "site.steps.title.berths.exchange"', () => {
      const WrappedComponent = getApplicationType(Component);
      const wrapper = shallow(
        <WrappedComponent
          appType={ApplicationOptions.ExchangeApplication}
          match={{
            params: { app: ApplicationType.BerthApp },
            isExact: true,
            url: '',
            path: '',
          }}
        />
      );

      expect(wrapper.find(Component).prop('applicationType')).toBe('site.steps.title.berths.exchange');
    });
  });

  describe('Winter-Storage application', () => {
    test('the value of "applicationType" should be "site.steps.title.winter_storage"', () => {
      const WrappedComponent = getApplicationType(Component);
      const wrapper = shallow(
        <WrappedComponent
          appType="foo"
          match={{
            params: { app: ApplicationType.WinterStorageApp },
            isExact: true,
            url: '',
            path: '',
          }}
        />
      );

      expect(wrapper.find(Component).prop('applicationType')).toBe('site.steps.title.winter_storage');
    });
  });
});

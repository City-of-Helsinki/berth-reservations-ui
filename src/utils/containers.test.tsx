import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route, RouteComponentProps } from 'react-router-dom';

import { withMatchParamsHandlers } from './container';

describe('containers', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('withMatchParamsHandlers', () => {
    const Component = (props: { text: string; localePush: Function } & RouteComponentProps) => <div>{props.text}</div>;
    const CompWithHandlers = withMatchParamsHandlers(Component);
    const getWrapper = (locale = 'fi') =>
      mount(
        <MemoryRouter initialEntries={[`/${locale}`]}>
          <Route path="/:locale/">
            <CompWithHandlers text="text" />
          </Route>
        </MemoryRouter>
      );

    test('should return a component with localePush handler', () => {
      expect(getWrapper('en').find(Component).prop('localePush')).toBeInstanceOf(Function);
    });

    test("localePush should push to the router's history the provided url prefixed with locale", () => {
      const props = getWrapper('sv').find(Component).props();
      props.localePush('test');

      expect(props.history.location.pathname).toEqual(expect.stringMatching('/sv/test'));
    });

    test("localePush should push to the router's history the same provided url if locale params is undefined", () => {
      const props = getWrapper().find(Component).props();
      props.localePush('test');

      expect(props.history.location.pathname).toEqual(expect.stringMatching('/test'));
    });
  });
});

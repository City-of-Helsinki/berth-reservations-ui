import { RouteComponentProps } from 'react-router-dom';

// tslint:disable-next-line
const dummyFunction = () => {};

export const getMockRouterProps = <Params>(data: Params) => {
  const location = {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {},
  };

  const props: RouteComponentProps<Params> = {
    location,
    match: {
      isExact: true,
      params: data,
      path: '',
      url: '',
    },
    history: {
      location,
      length: 2,
      action: 'POP',
      push: dummyFunction,
      replace: dummyFunction,
      go: dummyFunction,
      goBack: dummyFunction,
      goForward: dummyFunction,
      block: (t) => dummyFunction,
      createHref: (t) => '',
      listen: (t) => dummyFunction,
    },
    staticContext: {},
  };

  return props;
};

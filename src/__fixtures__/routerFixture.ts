import { RouteComponentProps } from 'react-router-dom';

const dummyFunction = () => {
  // do nothing
};

export const getMockRouterProps = <Params>(data: Params): RouteComponentProps<Params> => {
  const location = {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {},
  };

  return {
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
};

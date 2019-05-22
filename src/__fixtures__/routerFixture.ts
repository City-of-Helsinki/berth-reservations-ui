import { RouteComponentProps } from 'react-router-dom';

export const getMockRouterProps = <Params>(data: Params) => {
  const location = {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {}
  };

  const props: RouteComponentProps<Params> = {
    location,
    match: {
      isExact: true,
      params: data,
      path: '',
      url: ''
    },
    history: {
      location,
      length: 2,
      action: 'POP',
      push: () => {},
      replace: () => {},
      go: num => {},
      goBack: () => {},
      goForward: () => {},
      block: t => () => {},
      createHref: t => '',
      listen: t => () => {}
    },
    staticContext: {}
  };

  return props;
};

import { List } from 'immutable';
import { Steps } from '../components/steps/Step/types';

export const generateSteps = (routeNames: string[], urlPrefix: string): Steps => {
  const generated = routeNames.map((routeName, index) => ({
    key: routeName,
    completed: !index,
    current: !index,
    linkTo: `${urlPrefix}/${index ? routeName : ''}`
  }));

  return List(generated);
};

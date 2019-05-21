import { List } from 'immutable';
import { Steps } from '../components/steps/Step/types';

export const generateSteps = (routeNames: string[], urlPrefix: string): Steps => {
  const generated = routeNames.map((routeName, index) => ({
    key: routeName,
    completed: !index,
    current: !index,
    linkTo: generateStepURL(urlPrefix, index, routeName)
  }));

  return List(generated);
};

const generateStepURL = (prefix: string, index: number, routeName: string) => {
  if (index === 0) {
    return `${prefix}`;
  }
  if (index === 1) {
    return `${prefix}/${routeName}`;
  }

  return `${prefix}/form/${routeName}`;
};

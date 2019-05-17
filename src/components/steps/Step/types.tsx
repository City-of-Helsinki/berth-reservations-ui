import { List } from 'immutable';

export interface Step {
  key: string;
  completed: boolean;
  current: boolean;
  linkTo: string | undefined;
}

export type Steps = List<Step>;

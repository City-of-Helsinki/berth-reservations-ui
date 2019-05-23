export interface Step {
  key: string;
  completed: boolean;
  current: boolean;
  linkTo: string | undefined;
}

export type Steps = Step[];

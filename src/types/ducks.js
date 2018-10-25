// @flow
import type { RecordOf } from 'immutable';

export type Forms = RecordOf<{
  values: Object,
  step: number,
  done: boolean
}>;

export type Action = {
  type: string,
  payload: any
};

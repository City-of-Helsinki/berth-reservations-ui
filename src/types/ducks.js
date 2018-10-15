// @flow
import type { RecordOf } from 'immutable';

export type Forms = RecordOf<{
  registeredBoat: Object
}>;

export type Action = {
  type: string,
  payload: any
};

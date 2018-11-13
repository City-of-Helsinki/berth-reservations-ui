// @flow

export type ApiResult<T> = {
  count: number,
  next: null,
  previous: null,
  results: T
};

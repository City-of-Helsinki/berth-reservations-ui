export interface ApiResult<T> {
  count: number;
  next: null;
  previous: null;
  results: T;
}

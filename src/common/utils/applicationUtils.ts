import { List } from 'immutable';

import { SelectedIds } from '../types/resource';

export const getSelectedResources = <T extends { id: string }>(selectedIds: SelectedIds, resources: List<T>) =>
  selectedIds.reduce<List<T>>((acc, id) => {
    const matched = resources.find((resource) => resource.id === id);
    return matched ? acc.push(matched) : acc;
  }, List([]));

export const isResourceSelected = (selectedBerths: SelectedIds, resourceId: string): boolean =>
  !!selectedBerths.find((selectedBerth) => selectedBerth === resourceId);

/**
 * Convert number in string to floating number.
 *
 * @param {string | undefined} str
 * @returns {number | undefined}
 */
export const stringToFloat = (str: string | undefined | null) => {
  if (!str) return undefined;

  const num = Number(str.replace(',', '.'));
  return !Number.isNaN(num) ? num : undefined;
};

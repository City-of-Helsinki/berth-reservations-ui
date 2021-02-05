import { List } from 'immutable';

import { SelectedIds } from '../types/resource';

/**
 * Utility function that converts centimeters to meters.
 * @param length A number to be converted, it accepts null values as well.
 * @returns A converted number or an undefined/null value based on the parameter .
 */
export const convertCmToM = (length?: number | null) => length && length / 100;

export const getResources = <T, P, G extends { coordinates: [number, number] }>(
  data: {
    edges: ({
      node: {
        id: string;
        __typename: T;
        properties?: P;
        geometry?: G | null;
      } | null;
    } | null)[];
  } | null
) => {
  if (!data || !data.edges) return List([]);
  return List(
    data.edges.reduce<
      ({
        __typename: T;
        id: string;
        geometry: { coordinates: number[] };
      } & P)[]
    >((acc, harbor) => {
      if (!(harbor && harbor.node && harbor.node.properties && harbor.node.geometry)) return [];

      return [
        {
          ...harbor.node.properties,
          id: harbor.node.id,
          geometry: {
            coordinates: [harbor.node.geometry.coordinates[1], harbor.node.geometry.coordinates[0]],
          },
          __typename: harbor.node.__typename,
        },
        ...acc,
      ];
    }, [])
  );
};

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

import { List } from 'immutable';
import orderBy from 'lodash/orderBy';

import { WinterStorageArea } from './types';
import { UnmarkedWinterAreasQuery_winterStorageAreas as WINTER_STORAGE_AREAS } from '../__generated__/UnmarkedWinterAreasQuery';

export const getWinterStorageAreas = (data: WINTER_STORAGE_AREAS | null) => {
  if (!data || !data.edges) return List([]);

  const areas = data.edges.reduce<WinterStorageArea[]>((acc, area) => {
    if (!area?.node?.properties || !area.node.properties.estimatedNumberOfUnmarkedSpaces) return acc;

    return [
      ...acc,
      {
        id: area.node.id,
        name: area.node.properties.name || '',
      },
    ];
  }, []);
  const sorted = orderBy(areas, ['name'], ['asc']);

  return List(sorted);
};
